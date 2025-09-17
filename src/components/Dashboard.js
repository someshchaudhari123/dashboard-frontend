import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({
    users: 0,
    revenue: 0,
    orders: 0,
    visits: 0
  });

  // Simulate fetching data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your real API endpoint
        const res = await axios.get('http://localhost:8080/api/dashboard');
        setData(res.data);
      } catch (err) {
        console.log('Error fetching dashboard data:', err);
        // fallback example data
        setData({
          users: 120,
          revenue: 4500,
          orders: 75,
          visits: 2300
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row g-4">
        {/* Users Card */}
        <div className="col-md-3">
          <div className="card text-white bg-primary shadow">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text display-6">{data.users}</p>
            </div>
          </div>
        </div>
        {/* Revenue Card */}
        <div className="col-md-3">
          <div className="card text-white bg-success shadow">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text display-6">${data.revenue}</p>
            </div>
          </div>
        </div>
        {/* Orders Card */}
        <div className="col-md-3">
          <div className="card text-white bg-warning shadow">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text display-6">{data.orders}</p>
            </div>
          </div>
        </div>
        {/* Visits Card */}
        <div className="col-md-3">
          <div className="card text-white bg-danger shadow">
            <div className="card-body">
              <h5 className="card-title">Visits</h5>
              <p className="card-text display-6">{data.visits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
