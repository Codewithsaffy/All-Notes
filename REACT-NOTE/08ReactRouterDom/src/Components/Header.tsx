import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul className="flex bg-pink-800 p-4 gap-7">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-orange-700" : "text-white"
            }
          >
            {" "}
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-700" : "text-white"
            }
          >
            {" "}
            About
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-700" : "text-white"
            }
          >
            {" "}
            Contact
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Header;
