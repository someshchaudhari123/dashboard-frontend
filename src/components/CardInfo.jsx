import React from 'react';

const CardInfo = ({ title, value, color }) => {
  return (
    <div className={`card text-white bg-${color} shadow-sm`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default CardInfo;
