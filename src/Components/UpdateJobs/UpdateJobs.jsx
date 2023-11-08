import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJobs = () => {
  const updateJobs = useLoaderData();
  const {
    _id,
    email,
    jobTitle,
    deadline,
    description,
    category,
    minPrice,
    maxPrice,
  } = updateJobs;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const jobTitle = form.jobtitle.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const category = form.category.value;
    const minPrice = form.minprice.value;
    const maxPrice = form.maxprice.value;

    const updateData = {
        email,
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice
    };
    console.log(updateData);
    // update confirm data
    fetch(`http://localhost:5000/addjobs/${_id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        Swal.fire(
          'Good job!',
          'Your Job Already Added!',
          'success'
        )
      }
        
    })
  };

  return (
    <div className="bg-[#F7F7F7] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <form
        onSubmit={handleUpdate}
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email
          </label>
          <input
            name="email"
            type="email"
            defaultValue={email}
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobtitle" className="block text-gray-700 font-bold">
            Job Title
          </label>
          <input
            type="text"
            defaultValue={jobTitle}
            name="jobtitle"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            placeholder="Job Title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-700 font-bold">
            Deadline
          </label>
          <input
            type="text"
            name="deadline"
            defaultValue={deadline}
            placeholder="Deadline"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
            rows="4"
            defaultValue={description}
            placeholder="Description Here..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold">
            Category
          </label>
          <select
            name="category"
            className="form-select border-[2px] rounded border-[#00584367] p-2 w-full"
          >
            <option>{category}</option>
            <option value="web developer">Web Developer</option>
            <option value="digital marketing">Digital Marketing</option>
            <option value="graphics design">Graphics Design</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="minprice" className="block text-gray-700 font-bold">
            Minimum Price
          </label>
          <input
            type="number"
            name="minprice"
            placeholder="Minimum Price"
            defaultValue={minPrice}
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="maxprice" className="block text-gray-700 font-bold">
            Maximum Price
          </label>
          <input
            type="number"
            name="maxprice"
            placeholder="Maximum Price"
            defaultValue={maxPrice}
            className="form-input border-[2px] rounded border-[#00584367] p-2 w-full"
          />
        </div>
        <input
        value="Update"
        type="submit"
          className="bg-[#005843] text-white px-4 py-2 rounded hover-bg-[#014233] transition duration-300"
        >
          
        </input>
      </form>
    </div>
  );
};

export default UpdateJobs;
