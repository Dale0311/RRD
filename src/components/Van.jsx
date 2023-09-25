import { Link } from "react-router-dom";
import vanTypeColor from "../utils/vanTypeColor";
function Van({ image, name, type, price, id, details }) {
  // "simple", "luxury", "rugged"
  const color = vanTypeColor(type);
  return (
    <Link className="group relative block overflow-hidden" to={`${id}`}>
      <img
        src={`${image}`}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <div className="text-gray-700 font-bold flex flex-col">
            ${price} / <span className="text-sm font-medium">Day</span>
          </div>
        </div>
        <p className={`mt-1.5 py-2 px-4 rounded text-white bg-${color}`}>
          {type}
        </p>
      </div>
    </Link>
  );
}

export default Van;
