import MinusIcon from "./svgIcons/MinusIcon";
import PlusIcon from "./svgIcons/PlusIcon";

const SingleItem = ({ image, title, price, selected, onToggle }) => {
  return (
    <div
      className={`${
        selected ? "bg-gray-700/50 border border-primary" : "bg-gray-700/30"
      } rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300`}
    >
      <div className="flex items-center">
        <div className="w-12 h-12 hover:bg-yellow-600 rounded-md flex items-center justify-center mr-3">
          <img src={image} alt={title} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-gray-400">BDT {price}</p>
        </div>
      </div>
      <button
        className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
        onClick={onToggle}
      >
        {selected ? <MinusIcon /> : <PlusIcon />}
      </button>
    </div>
  );
};

export default SingleItem;
