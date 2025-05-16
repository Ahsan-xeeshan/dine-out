import { useState } from "react";
import CheeseBurger from "../assets/cheeseburger-svgrepo-com.svg";
import ChickenWrap from "../assets/chicken-lunch-svgrepo-com.svg";
import ChickenNuggets from "../assets/chicken.svg";
import FrenchFries from "../assets/french-fries-svgrepo-com.svg";
import FriedChicken from "../assets/fried-chicken-svgrepo-com.svg";
import Hamburger from "../assets/hamburger.svg";
import HotDog from "../assets/hot-dog-svgrepo-com.svg";
import Nachos from "../assets/nachos-svgrepo-com.svg";
import OnionRings from "../assets/onion-rings-svgrepo-com.svg";
import PizzaSlices from "../assets/pizza.svg";
import SubmarinaSandwich from "../assets/submarine.svg";
import VeggieBurger from "../assets/veggie-burger.png";
import OrderButton from "./OrderButton";
import SingleItem from "./SingleItem";
const CreateOrder = ({ onSetOrders }) => {
  const items = [
    { image: Hamburger, title: "Hamburger", price: 290 },
    { image: ChickenNuggets, title: "Chicken Nuggets", price: 350 },
    { image: SubmarinaSandwich, title: "Submarine Sandwich", price: 295 },
    { image: PizzaSlices, title: "Pizza slices", price: 199 },
    { image: FrenchFries, title: "French Fries", price: 150 },
    { image: HotDog, title: "Hot Dog", price: 250 },
    { image: FriedChicken, title: "Fried Chicken", price: 320 },
    { image: ChickenWrap, title: "Chicken Wrap", price: 270 },
    { image: CheeseBurger, title: "Cheeseburger", price: 310 },
    { image: VeggieBurger, title: "Veggie Burger", price: 280 },
    { image: OnionRings, title: "Onion Rings", price: 180 },
    { image: Nachos, title: "Loaded Nachos", price: 260 },
  ];
  const [order, setOrder] = useState({
    id: crypto.randomUUID(),
    customerName: "",
    orderItem: [],
    amount: "",
    status: "PENDING",
  });

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    setOrder({
      ...order,
      [name]: value,
    });
  };
  const handleItemToggle = (itemTitle) => {
    setOrder((prev) => {
      const isSelected = prev.orderItem.includes(itemTitle);
      return {
        ...prev,
        orderItem: isSelected
          ? prev.orderItem.filter((title) => title !== itemTitle)
          : [...prev.orderItem, itemTitle],
      };
    });
  };

  const handleAddOrder = () => {
    const total = items
      .filter((item) => order.orderItem.includes(item.title))
      .reduce((acc, curr) => acc + curr.price, 0);

    const newOrder = {
      ...order,
      amount: total,
    };
    if(newOrder.customerName === "" || newOrder.orderItem.length===0){
      alert('Please fill the form properly!')
      return
    }
    onSetOrders((prevOrders) => [...prevOrders, newOrder]);

    setOrder({
      id: crypto.randomUUID(),
      customerName: "",
      orderItem: [],
      amount: "",
      status: "PENDING",
    });
  };

  const total = items
    .filter((item) => order.orderItem.includes(item.title))
    .reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          value={order.customerName}
          onChange={handleChange}
          required
          className="w-full bg-gray-700/50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {items.map((item, i) => (
            <SingleItem
              key={i}
              title={item.title}
              image={item.image}
              price={item.price}
              selected={order.orderItem.includes(item.title)}
              onToggle={() => handleItemToggle(item.title)}
            />
          ))}
        </div>
      </div>

      <OrderButton onAddOrder={handleAddOrder} amount={total} />
    </div>
  );
};

export default CreateOrder;
