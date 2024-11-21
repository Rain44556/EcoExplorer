import { Outlet } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
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