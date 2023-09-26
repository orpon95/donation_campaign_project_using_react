import pic from "../../../public/Resources/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        {" "}
        <img src={pic} alt="" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="text-xl font-bold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="text-xl font-bold">
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
