const WebCard = () => {
  return (
    <div className="card card-compact w-96 bg-[#005843] shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex">
        <p>Deadline :</p>
        <p>Price :</p>
        </div>
        <div className="card-actions justify-end">
          <button className="bg-[#feec62] text-[#005843] font-semibold px-3 py-2 rounded">BID NOW</button>
        </div>
      </div>
    </div>
  );
};

export default WebCard;
