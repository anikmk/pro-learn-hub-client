import SeminarContent from "./SeminarContent";


const Seminar = () => {
  return (
    <div className="h-fit md:h-[650px] bg-[#CCCCCC] border-t-2 flex items-center px-10">
      <div className="w-11/12 lg:w-4/5 h-4/5 mx-auto">
        <h2 className="text-[40px] md:text-[54px] underline underline-offset-[20px] decoration-1 text-center font-semibold uppercase">
          Free Seminar
        </h2>
        <div className="py-4 mt-5 w-[80%] mx-auto">
         <SeminarContent></SeminarContent>
        </div>
      </div>
    </div>
  );
};

export default Seminar;
