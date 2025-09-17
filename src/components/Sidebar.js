// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/about">About</Link></li> {/* ✅ replaced Settings */}
      </ul>
    </div>
  );
};

export default Sidebar;
