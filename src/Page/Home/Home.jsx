import Banner from "./Banner/Banner";
import CategorysTab from "./CategorysTab/CategorysTab";
import Seminar from "./FreeSeminar/FreeSeminar";
import SuccessStory from "./SuccessStory/SuccessStory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-24 w-[80%] mx-auto">
            <CategorysTab></CategorysTab>
            </div>
            <Seminar></Seminar>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;