import FilterIcon from "./svgIcons/FilterIcon";

const Filter = ({ filterStatus, onChange }) => {
  return (
    <div className="flex gap-4 items-center">
      <FilterIcon />
      <select
        value={filterStatus}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm p-2 min-w-[120px] cursor-pointer"
      >
        <option value="ALL">All</option>
        <option value="PENDING">Pending</option>
        <option value="DELIVERED">Delivered</option>
      </select>
    </div>
  );
};

export default Filter;
