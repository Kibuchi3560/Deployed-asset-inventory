import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import { FaTachometerAlt, FaUsers, FaCube, FaEnvelope, FaCogs, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        variant="primary" 
        className="sidebar-toggle d-lg-none m-3" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </Button>
      
      <div className={`sidebar-container ${isOpen ? 'd-block' : 'd-none d-lg-block'}`}>
        <div className="sidebar-header">
          <h3 className="mb-0">Admin Panel</h3>
          <small className="text-light">Asset Management</small>
        </div>
        <Nav className="sidebar-nav flex-column">
          <Nav.Link as={NavLink} to="/admin/dashboard">
            <FaTachometerAlt className="icon-margin" /> Dashboard
          </Nav.Link>
          <Nav.Link as={NavLink} to="/admin/users">
            <FaUsers className="icon-margin" /> Manage Users
          </Nav.Link>
          <Nav.Link as={NavLink} to="/admin/assets">
            <FaCube className="icon-margin" /> Manage Assets
          </Nav.Link>
          <Nav.Link as={NavLink} to="/admin/requests">
            <FaEnvelope className="icon-margin" /> Requests
          </Nav.Link>
          <Nav.Link as={NavLink} to="/admin/system-config">
            <FaCogs className="icon-margin" /> System Config
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;