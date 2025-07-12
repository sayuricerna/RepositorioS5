import React from 'react';
import EmployeeRow from './employeeRow';

const AttendanceTable = ({ empleados, marcarAsistencia }) => {
  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map(emp => (
          <EmployeeRow key={emp.id} empleado={emp} marcarAsistencia={marcarAsistencia} />
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;