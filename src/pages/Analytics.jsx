// src/pages/Analytics.jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { saveAs } from 'file-saver';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const [chartData, setChartData] = useState({
    labels: months,
    datasets: [
      {
        label: 'Revenue',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  // Generate random revenue for all months
  useEffect(() => {
    const revenueData = months.map(() => Math.floor(Math.random() * 1000) + 200);
    setChartData((prev) => ({
      ...prev,
      datasets: [
        { ...prev.datasets[0], data: revenueData },
      ],
    }));
  }, []);

  // Download chart as image
  const downloadChart = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.toBlob((blob) => {
        saveAs(blob, 'analytics-chart.png');
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Analytics Dashboard</h2>
      <div className="card shadow p-4 mb-3">
        <Bar 
          data={chartData} 
          options={{
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true } },
          }} 
        />
      </div>
      <button className="btn btn-primary" onClick={downloadChart}>
        Download Chart
      </button>
    </div>
  );
};

export default Analytics;
