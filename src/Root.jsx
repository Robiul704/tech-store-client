import { Outlet } from "react-router-dom";
import Navber from "./pages/navber/Navber";
import Footer from "./pages/footer/Footer";



const Root = () => {
    return (
        <div className="mx-auto container">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;