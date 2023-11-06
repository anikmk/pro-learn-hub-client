import { Link } from "react-router-dom";


const Card = ({category}) => {
    const {_id,jobTitle,deadline,description,minPrice,image} = category;
    return (
        <div className="card card-compact w-96 bg-[#005843] shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{description}</p>
        <div className="flex">
        <p>Deadline :{deadline}</p>
        <p>Price :{minPrice}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/carddetails/${_id}`}>
          <button className="bg-[#feec62] text-[#005843] font-semibold px-3 py-2 rounded">BID NOW</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Card;