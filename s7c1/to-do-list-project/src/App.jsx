import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, text: editText } : task
    ));
    setEditingIndex(null);
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
      <h1>To do List | PrácticaS7C1</h1>

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
              <tr key={index} className={task.completed ? 'completed' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(index)}
                  />
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
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
                      <button onClick={() => deleteTask(index)}>Borrar</button>
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
    </div>
  );
}

export default App;


