import OrderReport from "./OrderReport";
import OrderSummary from "./OrderSummary";

const OrderDashboard = ({ orders, onSetOrders }) => {
  const numOfOrders = orders.length;

  const numOfPendingOrders = orders.filter(
    (item) => item.status === "PENDING"
  ).length;

  const numOfDeliveredOrders = orders.filter(
    (item) => item.status === "DELIVERED"
  ).length;

  const handleDeleteOrder = (id) => {
    onSetOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const handleDeliverOrder = (id) => {
    onSetOrders((prevOrders) =>
      prevOrders.map((item) =>
        item.id === id ? { ...item, status: "DELIVERED" } : item
      )
    );
  };

  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <OrderSummary
          totalOrder={numOfOrders}
          pending={numOfPendingOrders}
          delivered={numOfDeliveredOrders}
        />
      </div>

      <OrderReport
        orders={orders}
        onDelete={handleDeleteOrder}
        onDeliver={handleDeliverOrder}
      />
    </div>
  );
};

export default OrderDashboard;
