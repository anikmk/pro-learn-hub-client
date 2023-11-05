
import { useEffect, useState } from "react";
import Card from "./Card/Card";

const WebCard = ({category}) => {
  console.log(category)
  const [categoryData,setCategoryData] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/courses/${category}`)
    .then(res=>res.json())
    .then(data=>{
      setCategoryData(data)
      console.log(data)
    })
  },[category])
  return (
    <div>
      <h2>all category data is here</h2>
      <p>category length:{categoryData.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-14">
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
