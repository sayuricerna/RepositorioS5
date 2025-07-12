import React, { useState } from 'react';

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad === 1) {
      if (nombre.trim()) {
        onAddEmployee(nombre);
        setNombre('');
      }
    } else {
      for (let i = 1; i <= cantidad; i++) {
        onAddEmployee(`Empleado ${i}`);
      }
      setCantidad(1);
    }
  };

  return (
    <div className="add-employee-form">
      <h2>Añadir Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre del empleado"
              disabled={cantidad > 1}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Añadir
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;