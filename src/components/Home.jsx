import AdventureCards from "../pages/AdventureCards";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Newsletter from "./NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdventureCards></AdventureCards>
            <AboutUs></AboutUs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;