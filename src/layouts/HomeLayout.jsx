import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const HomeLayout = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitle = {
            "/": "Home | EcoExplores",
            "/updatedProfile": "updatedProfile | EcoExplores",
            "//myProfile": "myProfile | EcoExplorers",
            "/auth/login": "updatedProfile | EcoExplores ",
        };

        const currentPageTitle = pageTitle[location.pathname] || "EcoExplores"
        document.title = currentPageTitle;
    }, [location]);

    return (
        <div className="font-MontserratFamily">
            <nav className="w-10/12 mx-auto py-8"><Navbar></Navbar></nav>
            <main className="w-10/12 mx-auto py-4">
                <section>
                    <Outlet></Outlet>
                </section>
            </main>

            <footer><Footer></Footer></footer>
        </div>
    );
};

export default HomeLayout;