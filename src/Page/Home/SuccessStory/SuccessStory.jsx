import { useState } from "react";
import { useEffect } from "react";
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStory = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("/successData.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  return (
    <div className="bg-[#F7F7F7] py-32">
      <div className="w-full mx-auto">
      <h2 className="mx-auto lg:text-6xl md:text-5xl text-3xl font-semibold pb-5 md:mb-12 mb-10  border-b-gray-500 border-b-2
             lg:w-[40%]
              xl:w-[32%]
              md:w-[42%]
              w-[50%]
              ">Success Story</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {datas?.map((data) => (
            <SuccessStoryCard key={data.id} data={data}></SuccessStoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
