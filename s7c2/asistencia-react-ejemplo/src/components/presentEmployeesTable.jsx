import React from 'react';

const PresentEmployeesTable = ({ presentes, onDelete }) => {
  return (
    <table className="present-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Hora de Asistencia</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {presentes.map(emp => (
          <tr key={emp.id} className="asistente">
            <td>{emp.id}</td>
            <td>{emp.nombre}</td>
            <td>{emp.hora}</td>
            <td>
              <button 
                onClick={() => onDelete(emp.id)} 
                className="btn btn-danger"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PresentEmployeesTable;