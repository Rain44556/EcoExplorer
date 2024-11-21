import AdventureCards from "../pages/AdventureCards";
import Banner from "./Banner";
import Newsletter from "./NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdventureCards></AdventureCards>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;