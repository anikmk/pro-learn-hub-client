

const MyPostedJobCard = ({singleJob,handleDelete,handleUpdate}) => {
    console.log(singleJob)
    const {_id,email,jobTitle,deadline,description,category,minPrice,maxPrice,status} = singleJob;

  return (
    <div className="card bg-[#005843] text-white shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Added Job Photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl md:text-3xl font-semibold">{category}</h2>
        <p className="text-[#cccccc] text-[17px]">{description}</p>
        <p className="text-[17px]">Title: {jobTitle}</p>
        <p className="text-[17px]">Dead Line: {deadline}</p>
        <p className="text-[17px]">Email: {email}</p>
        <div className="flex">
        <p className="text-[17px]">MinPrice: {minPrice}</p>
        <p className="text-[17px]">MaxPrice: {maxPrice}</p>

        </div>
        <div className="flex justify-between pt-2">
        <button onClick={()=>handleDelete(_id)} className="bg-[#feec62] py-2 px-3 rounded text-black font-semibold">DELETE</button>
        {
          status === 'confirm' ? <button className="bg-[#fff] py-2 px-3 rounded text-green-800 font-semibold">Updated</button> :
          <button onClick={()=>handleUpdate(_id)} className="bg-[#feec62] py-2 px-3 rounded text-black font-semibold">UPDATE</button>
        }
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobCard;
