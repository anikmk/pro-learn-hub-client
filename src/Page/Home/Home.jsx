import Banner from "./Banner/Banner";
import CategorysTab from "./CategorysTab/CategorysTab";
import Seminar from "./FreeSeminar/FreeSeminar";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-24 w-[80%] mx-auto">
            <CategorysTab></CategorysTab>
            </div>
            <Seminar></Seminar>
        </div>
    );
};

export default Home;