// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   return (
//     <div>
//       <h2 className="mb-4">Dashboard</h2>
//       <div className="row">
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Revenue</h5>
//             <h3>$12,500</h3>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Users</h5>
//             <h3>350</h3>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Orders</h5>
//             <h3>120</h3>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Visits</h5>
//             <h3>1,500</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   const [userCount, setUserCount] = useState(0);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/auth/users/count")
//       .then((res) => res.json())
//       .then((data) => setUserCount(data))
//       .catch((err) => console.error("Error fetching user count:", err));
//   }, []);

//   return (
//     <div>
//       <h2 className="mb-4">Dashboard</h2>
//       <div className="row">
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Revenue</h5>
//             <h3>$12,500</h3>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Users</h5>
//             <h3>{userCount}</h3>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Orders</h5>
//             <h3>120</h3>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card p-3 shadow-sm">
//             <h5>Visits</h5>
//             <h3>1,500</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = () => {
    setLoading(true);
    setError("");
    fetch("https://dashboard-backend-rwbu.onrender.com/api/auth/users/count")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user count");
        return res.json();
      })
      .then((data) => setUserCount(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  // Example chart data (you can fetch real data later)
  const chartData = [
    { month: "Jan", users: 30 },
    { month: "Feb", users: 45 },
    { month: "Mar", users: 60 },
    { month: "Apr", users: 90 },
    { month: "May", users: 120 },
  ];

  return (
    <div>
      <h2 className="mb-4">📊 Dashboard</h2>

      {/* Loading & Error State */}
      {loading && <p>Loading data...</p>}
      {error && (
        <div className="alert alert-danger">
          {error}{" "}
          <button className="btn btn-sm btn-light" onClick={fetchUserCount}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card p-3 shadow-sm hover-card">
                <h5>Revenue</h5>
                <h3>$12,500</h3>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card p-3 shadow-sm hover-card">
                <h5>Users</h5>
                <h3>{userCount}</h3>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card p-3 shadow-sm hover-card">
                <h5>Orders</h5>
                <h3>120</h3>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card p-3 shadow-sm hover-card">
                <h5>Visits</h5>
                <h3>1,500</h3>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="card mt-4 p-3 shadow-sm">
            <h5>User Growth</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {/* Custom styles for hover animation */}
      <style>{`
        .hover-card {
          transition: transform 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
