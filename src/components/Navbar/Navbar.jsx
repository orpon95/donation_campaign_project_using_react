import pic from "../../../public/Resources/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-9 md:justify-between items-center">
      <div>
        {" "}
        <img src={pic} alt="" />
      </div>
      <div>
        <ul className="flex gap-2 md:gap-6">
          <li className="text-base md:text-xl font-medium md:font-bold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="text-base md:text-xl font-medium md:font-bold">
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="text-base md:text-xl font-medium md:font-bold">
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
