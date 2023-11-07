import banner from '../../assets/banner/addjob.png'
import  { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'
const AddJobsForm = () => {
  useEffect(()=>{
    Aos.init({duration:600})
  },[])
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
    fetch('https://pro-learn-hub-server-site.vercel.app/addjobs',{
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
    <div>
      {/* add job page banner section */}
      <div className="bg-[#fff] pt-12 pb-28">
      <div className="w-11/12 mx-auto">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-[55%] xl:w-[45%] w-[90%]">
            <div data-aos="fade-right" className="text-left md:pb-8 py-5">
               <h1 className="text-black uppercase font-semibold md:text-6xl text-3xl lg:text-5xl">We are <span className="text-[#005843]">committed</span> To Build Best <span className="text-[#005843]">Course Resources</span></h1>
            </div>
            <div data-aos="fade-down-left" className="flex pb-6 lg:mb-0">
              <button className="mr-5 bg-[#005843] text-white lg:py-3 py-2 lg:px-9 md:px-7 px-6 rounded-full text-md font-medium hover:bg-[#005848] hover:shadow-lg hover:shadow-[#0E624E]">Course</button>
              <button className="border border-[#005843] text-[#005843] lg:py-3 py-2 lg:px-9 md:px-7 px-6 rounded-full hover:bg-[#005843] hover:text-white font-semibold hover:shadow-lg hover:shadow-[#0E624E]">Services</button>
            </div>
          </div>
          <div data-aos="fade-left" className="lg:w-[45%] w-11/12 h-full mx-auto lg:mx-0">
            <img className="w-full" src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>




      <div className="bg-[#F7F7F7] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
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
    </div>
  );
};

export default AddJobsForm;
