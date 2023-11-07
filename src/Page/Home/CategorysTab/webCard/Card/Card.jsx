import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Card = ({category}) => {
  useEffect(()=>{
    Aos.init({duration:600})
  },[])
    const {_id,jobTitle,deadline,description,minPrice,image} = category;
    return (
        <div data-aos="slide-up" className="card card-compact bg-[#005843] shadow-xl">
      <figure>
        <img
          className="h-[200px]"
          src={image}
          alt={jobTitle}
        />
      </figure>
      <div className="card-body shadow-xl text-white">
        <h2 className="card-title text-[#feec62]">{jobTitle}</h2>
        <p className="text-gray-300">{description}</p>
        <div className="flex pb-2">
        <p className="font-semibold">Deadline :{deadline}</p>
        <p className="font-semibold">Price :{minPrice}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/carddetails/${_id}`}>
          <button className="bg-[#feec62] text-[#005843] font-semibold px-3 py-2 rounded hover:bg-white">BID NOW</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Card;