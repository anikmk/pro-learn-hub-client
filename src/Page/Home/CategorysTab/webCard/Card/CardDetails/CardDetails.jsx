
import  { useState } from 'react';
const CardDetails = () => {
    const [price, setPrice] = useState('');
    const [deadline, setDeadline] = useState('');
    const [bidingEmail, setBidingEmail] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');

    const handleFormSubmit = (e) => {     
        e.preventDefault();
        const bidingData = {
            price,
            deadline,
            bidingEmail,
            buyerEmail
        }
        console.log(bidingData)
      };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
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
            value={deadline}
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
            placeholder='Buyer Email'
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
