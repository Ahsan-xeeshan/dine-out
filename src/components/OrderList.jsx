const OrderList = ({
  id,
  customerName,
  numOfItem,
  amount,
  status,
  onDelete,
  onDeliver,
}) => {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{numOfItem}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">
        <span
          className={status === "PENDING" ? "text-red-500" : "text-green-500"}
        >
          {status}
        </span>
      </td>
      <td className="py-3">
        <button
          type="button"
          className="bg-gray-800 cursor-pointer hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          type="button"
          className={`bg-gray-800 cursor-pointer hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300 ${
            status === "DELIVERED" ? "hidden" : ""
          }`}
          onClick={() => onDeliver(id)}
        >
          DELIVER
        </button>
      </td>
    </tr>
  );
};

export default OrderList;
