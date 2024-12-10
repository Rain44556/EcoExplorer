import AdventureCards from "../pages/AdventureCards";
import Banner from "./Banner";
import Newsletter from "./NewsLetter";
import EcoProducts from "./EcoProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdventureCards></AdventureCards>
            <EcoProducts></EcoProducts>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;