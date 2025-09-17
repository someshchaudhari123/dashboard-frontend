import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="d-flex">
      <nav className="bg-dark text-white p-3" style={{ width: '220px', height: '100vh' }}>
        <h3 className="text-center">Admin</h3>
        <ul className="list-unstyled mt-4">
          <li className="mb-3"><Link to="/dashboard" className="text-white">Dashboard</Link></li>
          <li className="mb-3"><Link to="/users" className="text-white">Users</Link></li>
          <li className="mb-3"><Link to="/analytics" className="text-white">Analytics</Link></li>
          <li className="mb-3"><Link to="/About" className="text-white">About</Link></li>
          <li className="mt-5">
            <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <main className="p-4 w-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
