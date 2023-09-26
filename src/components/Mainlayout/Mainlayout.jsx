import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="w-[80%] mx-auto mt-7">
            <Navbar></Navbar>
            <Outlet></Outlet>

            
        </div>
        
    );
};

export default MainLayout;