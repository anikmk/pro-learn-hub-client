import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Card = ({category}) => {
  const {user} = useContext(AuthContext)
  useEffect(()=>{
    Aos.init({duration:600})
  },[])
    const {_id,jobTitle,deadline,description,minPrice,email} = category;
    console.log(email)
    return (
        <div data-aos="slide-up" className="card card-compact bg-[#005843] shadow-xl">
      <figure>
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

          <button className= {` ${user?.email == email && "disabled bg-warning"} text-[#005843] bg-[#fff] font-semibold px-3 py-2 rounded hover:bg-white`}>BID NOW</button>

          </Link>
        </div>
      </div>
    </div>
    );
};

export default Card;