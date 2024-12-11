import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    department: '',
    designation: '',
    basicSalary: '',
  });

  useEffect(() => {
    axios.get('http://localhost:8080/api/employees')
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (employee) => {
    setEditingEmployee(employee.id);
    setFormData(employee);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    axios.put(`http://localhost:8080/api/employees/${formData.id}`, formData)
      .then(() => {
        setEmployees((prev) => prev.map(emp => (emp.id === formData.id ? formData : emp)));
        setEditingEmployee(null);
      })
      .catch((error) => console.error(error));
  };

  const handleCancel = () => {
    setEditingEmployee(null);
    setFormData({
      id: '',
      name: '',
      email: '',
      department: '',
      designation: '',
      basicSalary: '',
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Basic Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.basicSalary}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingEmployee && (
        <div>
          <h2>Edit Employee</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Department:
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Designation:
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Basic Salary:
              <input
                type="number"
                name="basicSalary"
                value={formData.basicSalary}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EmployeeTable;
