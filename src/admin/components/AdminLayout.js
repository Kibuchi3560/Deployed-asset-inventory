// AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="app-layout">
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;