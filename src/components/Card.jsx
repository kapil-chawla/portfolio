
const Card = ({ title, items }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
