const RevenueCard = ({ title, amount }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{amount}</p>
    </div>
  );
};

export default RevenueCard;
