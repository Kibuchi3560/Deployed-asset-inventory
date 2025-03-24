// UserForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/usersSlice';
import axios from 'axios';

const UserForm = () => {
  const dispatch = useDispatch();
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({ username: '', role: 'Employee', department: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/assetinventorymanagement/departments', { withCredentials: true })
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error('Error fetching departments:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.department) {
      setError('Username and department are required.');
      return;
    }
    try {
      await dispatch(addUser(formData)).unwrap();
      setFormData({ username: '', role: 'Employee', department: '' });
      setError(null);
    } catch (err) {
      setError('Failed to add user. Please try again.');
    }
  };

  return (
    <div className="card p-4 shadow-sm border-0">
      <h4 className="mb-4 text-center text-primary">Add New User</h4>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button type="button" className="btn-close" onClick={() => setError(null)}></button>
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="username" className="form-label fw-bold text-muted">Username</label>
          <input
            id="username"
            type="text"
            className="form-control rounded-pill"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Enter username"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="form-label fw-bold text-muted">Role</label>
          <select
            id="role"
            className="form-select rounded-pill"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="form-label fw-bold text-muted">Department</label>
          <select
            id="department"
            className="form-select rounded-pill"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dep, idx) => (
              <option key={idx} value={dep}>{dep}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100 rounded-pill py-2">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;