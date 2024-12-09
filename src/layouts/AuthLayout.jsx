import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import { useEffect } from "react";

const AuthLayout = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitle = {
            "/auth/login": "login | EcoExplores ",
            "/auth/signup": "signup | EcoExplores ",
            "/auth/forgotPass": "forgotPass | EcoExplores ",

        };

        const currentPageTitle = pageTitle[location.pathname] || "EcoExplores"
        document.title = currentPageTitle;
    }, [location]);
    return (
        <div className="font-MontserratFamily">
           <nav className="w-10/12 mx-auto py-8"><Navbar></Navbar></nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;