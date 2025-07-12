import { useState } from 'react';
import './App.css';
import AttendanceTable from './components/attendanceTable';
import PresentEmployeesTable from './components/presentEmployeesTable';
import AddEmployeeForm from './components/addEmployeeForm';

function App() {
  const [empleados, setEmpleados] = useState([

  ]);

  const [presentes, setPresentes] = useState([]);

  const marcarAsistencia = (id) => {
    const ahora = new Date();
    const horaAsistencia = ahora.toLocaleTimeString();
    
    setEmpleados(prev =>
      prev.map(emp =>
        emp.id === id ? { ...emp, asistencia: true } : emp
      )
    );
    
    const empleado = empleados.find(emp => emp.id === id);
    setPresentes(prev => [
      ...prev,
      { ...empleado, asistencia: true, hora: horaAsistencia }
    ]);
  };

  const eliminarAsistencia = (id) => {
    setPresentes(prev => prev.filter(emp => emp.id !== id));
    setEmpleados(prev =>
      prev.map(emp =>
        emp.id === id ? { ...emp, asistencia: false } : emp
      )
    );
  };

  const agregarEmpleado = (nombre) => {
    const nuevoId = empleados.length > 0 ? Math.max(...empleados.map(e => e.id)) + 1 : 1;
    const nuevoEmpleado = {
      id: nuevoId,
      nombre,
      asistencia: false
    };
    setEmpleados([...empleados, nuevoEmpleado]);
  };

  return (
    <div className="app">
      <h1>Control de Asistencia</h1>
      
      <AddEmployeeForm onAddEmployee={agregarEmpleado} />
      
      <h2>Lista de Empleados</h2>
      <AttendanceTable 
        empleados={empleados.filter(emp => !emp.asistencia)} 
        marcarAsistencia={marcarAsistencia} 
      />
      
      <h2>Empleados Presentes</h2>
      <PresentEmployeesTable 
        presentes={presentes} 
        onDelete={eliminarAsistencia} 
      />
    </div>
  );
}

export default App;