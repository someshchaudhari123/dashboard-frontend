import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    const res = await axios.get(`http://localhost:8080/api/users/${id}`);
    setName(res.data.name);
    setEmail(res.data.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/users/${id}`, { name, email });
      } else {
        await axios.post('http://localhost:8080/api/users', { name, email });
      }
      navigate('/users');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container p-4">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required/>
        </div>
        <button className="btn btn-success">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default UserForm;
