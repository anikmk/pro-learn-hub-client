

const Card = ({category}) => {
    const {jobTitle,deadline,description,minPrice} = category;
    return (
        <div className="card card-compact w-96 bg-[#005843] shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
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
          <button className="bg-[#feec62] text-[#005843] font-semibold px-3 py-2 rounded">BID NOW</button>
        </div>
      </div>
    </div>
    );
};

export default Card;