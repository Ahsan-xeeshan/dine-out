const OrderButton = ({ onAddOrder, amount }) => {
  return (
    <button
      type="button"
      className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
      onClick={onAddOrder}
    >
      Place Order (BDT {amount?? 0})
    </button>
  );
};

export default OrderButton;
