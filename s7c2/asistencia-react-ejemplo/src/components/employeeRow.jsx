import React from 'react';

const EmployeeRow = ({ empleado, marcarAsistencia }) => {
  return (
    <tr className={empleado.asistencia ? 'asistente' : 'inasistente'}>
      <td>{empleado.id}</td>
      <td>{empleado.nombre}</td>
      <td>{empleado.asistencia ? 'Presente' : 'Ausente'}</td>
      <td>
        {!empleado.asistencia && (
          <button 
            onClick={() => marcarAsistencia(empleado.id)} 
            className="btn btn-success"
          >
            Marcar Asistencia
          </button>
        )}
      </td>
    </tr>
  );
};

export default EmployeeRow;