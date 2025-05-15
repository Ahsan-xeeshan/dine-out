import { useState } from "react";
import Filter from "./Filter";
import NoOrderAdded from "./NoOrderAdded";
import OrderList from "./OrderList";

const OrderReport = ({ orders, onDelete, onDeliver }) => {
  const [filterStatus, setFilterStatus] = useState("ALL");

  const filteredOrders =
    filterStatus === "ALL"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <Filter filterStatus={filterStatus} onChange={setFilterStatus} />
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((item) => (
                  <OrderList
                    key={item.id}
                    id={item.id}
                    onDelete={onDelete}
                    onDeliver={onDeliver}
                    customerName={item.customerName}
                    numOfItem={item.orderItem.length}
                    amount={item.amount}
                    status={item.status}
                  />
                ))
              ) : (
                <NoOrderAdded />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderReport;
