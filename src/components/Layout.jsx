import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderDashboard from "./OrderDashboard";

const Layout = () => {
  const [orders, setOrders] = useState([]);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder onSetOrders={setOrders} />
      <OrderDashboard orders={orders} onSetOrders={setOrders} />
    </main>
  );
};

export default Layout;
