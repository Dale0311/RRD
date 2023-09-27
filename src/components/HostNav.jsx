import { NavLink } from "react-router-dom";
function HostNav() {
  const active = { color: "#1F2937" };
  return (
    <header className="bg-white">
      <div className="mx-auto container p-4 sm:p-0">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-800 font-semibold"
                    style={({ isActive }) => (isActive ? active : null)}
                    to="."
                    end
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-800 font-semibold"
                    style={({ isActive }) => (isActive ? active : null)}
                    to="income"
                  >
                    Income
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-800 font-semibold"
                    style={({ isActive }) => (isActive ? active : null)}
                    to="vans"
                  >
                    Vans
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-800 font-semibold"
                    style={({ isActive }) => (isActive ? active : null)}
                    to="reviews"
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HostNav;
