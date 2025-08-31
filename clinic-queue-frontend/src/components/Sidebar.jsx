// src/components/Sidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaCalendarAlt, FaUserPlus, FaListUl, FaSignInAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { to: '/appointments', label: 'Appointments', icon: <FaCalendarAlt /> },
    { to: '/register', label: 'Register', icon: <FaUserPlus /> },
    { to: '/queue', label: 'Queue', icon: <FaListUl /> },
    { to: '/login', label: 'Login', icon: <FaSignInAlt /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">QLINIK</div>
      <nav className="sidebar-nav">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="icon">{link.icon}</span>
            <span className="label">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
