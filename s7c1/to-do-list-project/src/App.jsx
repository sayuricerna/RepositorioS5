
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        if (!response.ok) throw new Error('Error al cargar las tareas');
        const apiTasks = await response.json();
        setTasks(apiTasks.map(task => ({
          id: task.id,
          text: task.title,
          completed: task.completed
        })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const syncWithAPI = async (method, taskData, id = '') => {
    try {
      const url = id 
        ? `https://jsonplaceholder.typicode.com/todos/${id}`
        : 'https://jsonplaceholder.typicode.com/todos';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData)
      });
      
      if (!response.ok) throw new Error('Error al sincronizar con el servidor');
      return await response.json();
    } catch (err) {
      console.error('Error de sincronización:', err);
    }
  };

  const addTask = async () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        text: newTask,
        completed: false,
        userId: 1 // ID de usuario ficticio para la API
      };
      
      const tempId = Date.now(); 
      setTasks([...tasks, { ...newTaskObj, id: tempId }]);
      setNewTask('');
      
      const apiTask = await syncWithAPI('POST', {
        title: newTask,
        completed: false,
        userId: 1
      });
       setTasks(prev => prev.map(t => t.id === tempId ? { ...t, id: apiTask.id } : t));
    }
  };

  const deleteTask = async (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    await syncWithAPI('DELETE', {}, id);
  };

  const toggleTask = async (id) => {
    const taskToUpdate = tasks.find(task => task.id === id);
    const updatedStatus = !taskToUpdate.completed;
    
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: updatedStatus } : task
    ));
    
    await syncWithAPI('PATCH', { completed: updatedStatus }, id);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = async (index) => {
    const taskId = tasks[index].id;
    const updatedTask = { ...tasks[index], text: editText };
    
    setTasks(tasks.map((task, i) =>
      i === index ? updatedTask : task
    ));
    setEditingIndex(null);
    
    await syncWithAPI('PATCH', { title: editText }, taskId);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  const filteredTasks = tasks
    .filter(task =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.completed - b.completed);

  return (
    <div className="todo-container">
      <h1>Semana 8 Clase</h1>

      <div className="input-group">
        <input
          type="text"
          value={newTask}
          placeholder="Nueva tarea"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Agregar</button>
      </div>

      <div className="search-group">
        <input
          type="text"
          placeholder="Ingrese una tarea a buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando tareas...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      ) : (
        <table className="task-table">
          <thead>
            <tr>
              <th></th>
              <th>Tarea</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <tr key={task.id} className={task.completed ? 'completed' : ''}>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <span>{task.text}</span>
                    )}
                  </td>
                  <td>
                    {task.completed ? 'Completada' : 'Pendiente'}
                  </td>
                  <td className="actions">
                    {editingIndex === index ? (
                      <>
                        <button onClick={() => saveEdit(index)}>Guardar</button>
                        <button onClick={cancelEdit}>Cancelar</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEditing(index)}>Editar</button>
                        <button onClick={() => deleteTask(task.id)}>Borrar</button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  {tasks.length === 0 ? 'No hay tareas' : 'No se encontraron resultados'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
