import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../assets/logo.png';
import logoIcon from '../assets/logo-icon.png';
import Logout from './pages/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo" id="logo-full">
        <img src={logo} alt="logo" />
      </div>
      <div className="logo" id="logo-icon">
        <img src={logoIcon} alt="logo icon" />
      </div>
      <div className="menu">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/admin-dashboard" className="nav-link" activeClassName="active">
              <Icon icon="radix-icons:dashboard" className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/member" className="nav-link" activeClassName="active">
              <Icon icon="octicon:people-24" className="icon" />
              <span>Members</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/schedule" className="nav-link" activeClassName="active">
              <Icon icon="material-symbols:calendar-month-outline-rounded" className="icon" />
              <span>Schedule</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/trainer" className="nav-link" activeClassName="active">
              <Icon icon="map:gym" className="icon" />
              <span>Trainers</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/payment" className="nav-link" activeClassName="active">
              <Icon icon="ic:outline-payment" className="icon" />
              <span>Payments</span>
            </NavLink>
          </li>
          <div className="line" />
          <li className="nav-item">
            <NavLink to="/admin-dashboard/setting" className="nav-link" activeClassName="active">
              <Icon icon="material-symbols:settings-outline" className="icon" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/help" className="nav-link" activeClassName="active">
              <Icon icon="ion:help-buoy-sharp" className="icon" />
              <span>Help</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin-dashboard/logout"
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#logout-modal"
            >
              <Icon icon="bx:log-out-circle" className="icon" />
              <span>Log Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;
