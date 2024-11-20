import { Outlet } from "react-router-dom";
import Navbar from "../../src/components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-MontserratFamily">
            <nav className="w-10/12 mx-auto py-8"><Navbar></Navbar></nav>
            <main className="w-10/12 mx-auto py-4">
                <section>
                    <Outlet></Outlet>
                </section>
            </main>

            <footer></footer>
        </div>
    );
};

export default HomeLayout;