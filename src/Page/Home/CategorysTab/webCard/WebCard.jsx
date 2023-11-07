
import { useEffect, useState } from "react";
import Card from "./Card/Card";

const WebCard = ({category}) => {
  console.log(category)
  const [categoryData,setCategoryData] = useState([]);
  console.log(categoryData)
  useEffect(()=>{
    fetch(`https://pro-learn-hub-server-site.vercel.app/courses/${category}`)
    .then(res=>res.json())
    .then(data=>{
      setCategoryData(data)
      console.log(data)
    })
  },[category])
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-14">
        {
          categoryData.map(category=><Card
          key={category._id}
          category={category}
          >

          </Card>)
        }
      </div>
    </div>
  );
};

export default WebCard;
