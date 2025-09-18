// // src/pages/Users.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch users from backend
//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get('http://localhost:8080/api/users'); // Your Spring Boot endpoint
//       setUsers(res.data); // Make sure backend returns array of users
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching users:', err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Users</h2>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <div className="card shadow p-4">
//           <table className="table table-hover">
//             <thead className="table-dark">
//               <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.active ? 'Active' : 'Inactive'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Users;


// src/pages/Users.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ id: null, name: "", email: "", role: "", active: true });
  const [editing, setEditing] = useState(false);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://dashboard-backend-rwbu.onrender.com/api/users");
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add user
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dashboard-backend-rwbu.onrender.com/api/users", form);
      fetchUsers();
      setForm({ id: null, name: "", email: "", role: "", active: true });
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setEditing(true);
    setForm(user);
  };

  // Update user
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://dashboard-backend-rwbu.onrender.com/api/users/${form.id}`, form);
      fetchUsers();
      setEditing(false);
      setForm({ id: null, name: "", email: "", role: "", active: true });
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://dashboard-backend-rwbu.onrender.com/api/users/${id}`);
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Users Management</h2>

      {/* Add/Edit Form */}
      <div className="card shadow p-4 mb-4">
        <h5>{editing ? "Edit User" : "Add User"}</h5>
        <form onSubmit={editing ? handleUpdate : handleAdd}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="role"
                placeholder="Role"
                value={form.role}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-2 mb-3">
              <select
                className="form-control"
                name="active"
                value={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.value === "true" })}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <div className="col-md-1 mb-3">
              <button type="submit" className="btn btn-primary w-100">
                {editing ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Users Table */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="card shadow p-4">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.active ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
