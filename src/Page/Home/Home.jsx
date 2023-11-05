import Banner from "./Banner/Banner";
import CategorysTab from "./CategorysTab/CategorysTab";
import Seminar from "./FreeSeminar/FreeSeminar";
import SuccessStory from "./SuccessStory/SuccessStory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" bg-[#cccccc73]">
            <div className="w-[90%] mx-auto">
            <CategorysTab></CategorysTab>
            </div>
            </div>
            <Seminar></Seminar>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;