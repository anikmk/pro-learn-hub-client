
import  { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../../Providers/AuthProvider';

const CardDetails = () => {
  const {user} = useContext(AuthContext)
  const detailsData = useLoaderData()
  const {description,deadline,minPrice,category,image,status} = detailsData
  console.log(detailsData)
    const [price, setPrice] = useState('');
    const [deadLine, setDeadline] = useState('');
    const [bidingEmail, setBidingEmail] = useState('');
    const [buyerEmail, setBuyerEmail] = useState(user ? user.email : '');

    const handleFormSubmit = (e) => {     
        e.preventDefault();
        const bidingData = {
            status,
            category,
            price,
            deadline: deadLine,
            bidingEmail,
            buyerEmail
        }
        console.log(bidingData)
        fetch('http://localhost:5000/bidform',{
          method:"POST",
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify(bidingData)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              title: "Stored Succesfully!",
              text: "We are store your Information!",
              icon: "success"
            });
          }
          console.log(data)
        })
      };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="w-[50%] md:mr-6 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">{category}</h1>
            <p className="py-6">
              {description}
            </p>
            <p className="py-6">
             {deadline}
            </p>
            <p className="py-6">
              {minPrice}
            </p>
          </div>
        </div>
      </div>

      {/* bit Form Section */}

      <div className="bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold">Price</label>
          <input
            type="text"
            id="price"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={price}
            placeholder='price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-700 font-bold">Deadline</label>
          <input
            type="text"
            placeholder='Deadline'
            id="deadline"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={deadLine}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bidingEmail" className="block text-gray-700 font-bold"> Biding Email</label>
          <input
            type="email"
            placeholder='Biding Email'
            id="bidingEmail"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={bidingEmail}
            onChange={(e) => setBidingEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="buyerEmail" className="block text-gray-700 font-bold">Buyer Email</label>
          <input
            type="email"
            defaultValue={buyerEmail}
            readOnly
            id="buyerEmail"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={buyerEmail}
            onChange={(e) => setBuyerEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-[#005843] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Bid Form
        </button>
      </form>
    </div>
    </div>
  );
};

export default CardDetails;
