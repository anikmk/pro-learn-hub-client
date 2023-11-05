
import  { useState } from 'react';
import Swal from 'sweetalert2';
const AddJobsForm = () => {
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const AddedJobData = {
        email,
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice
    }
    console.log(AddedJobData)
    fetch('http://localhost:5000/addjobs',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(AddedJobData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire(
          'Good job!',
          'Your Job Already Added!',
          'success'
        )
      }
    })
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
          <input
            type="email"
            id="email"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={email}
            placeholder='Job Title'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-700 font-bold">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={jobTitle}
            placeholder='Job Title'
            onChange={(e) => setJobTitle(e.target.value)}
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
          <label htmlFor="description" className="block text-gray-700 font-bold">Description</label>
          <textarea
            id="description"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            rows="4"
            placeholder='Description Here...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold">Category</label>
          <select
            id="category"
            className="form-select border-[2px] rounded border-[#00584367] p-2 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="web developer">Web Developer</option>
            <option value="digital marketing">Digital Marketing</option>
            <option value="graphics design">Graphics Design</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="minPrice" className="block text-gray-700 font-bold">Minimum Price</label>
          <input
            type="number"
            placeholder='Minimum Price'
            id="minPrice"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="maxPrice" className="block text-gray-700 font-bold">Maximum Price</label>
          <input
            type="number"
            placeholder='Maximum Price'
            id="maxPrice"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-[#005843] text-white px-4 py-2 rounded hover:bg-[#014233] transition duration-300"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJobsForm;
