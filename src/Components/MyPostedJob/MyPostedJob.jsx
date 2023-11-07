import banner from '../../assets/banner/postedjob.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Page/Providers/AuthProvider";
import MyPostedJobCard from "./MyPostedJobCard/MyPostedJobCard";
import Swal from "sweetalert2";
import Aos from 'aos';
import 'aos/dist/aos.css'


const MyPostedJob = () => {
    useEffect(()=>{
      Aos.init({duration:600})
    },[])

    const {user} = useContext(AuthContext)
    const [myPostedJob,setMyPostedJob] = useState([])
    console.log(myPostedJob)
    const url = `https://pro-learn-hub-server-site.vercel.app/addjobs?email=${user?.email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
            setMyPostedJob(data)
        })
    },[url])

    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed the deletion
          fetch(`https://pro-learn-hub-server-site.vercel.app/addjobs/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
              const remainig = myPostedJob.filter(job=> job._id !== id)
              setMyPostedJob(remainig)
            });
        }
      });
    };

    const handleUpdate = (id) => {
      fetch(`https://pro-learn-hub-server-site.vercel.app/addjobs/${id}`,{
        method:"PATCH",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({status:'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          // update
          const remainig = myPostedJob.filter(myJob=>myJob._id !== id)
          const update = myPostedJob.find(myJob=>myJob._id === id)
          update.status='confirm'
          const newPostedJob = [update, ...remainig];
          setMyPostedJob(newPostedJob)
        }
      })
    }
    return (
        <div>
          <div className="bg-[#fff] pt-12 pb-28">
      <div className="w-11/12 mx-auto">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-[55%] xl:w-[45%] w-[90%]">
            <div data-aos="fade-right" className="text-left md:pb-8 py-5">
               <h1 className="text-black uppercase font-semibold md:text-6xl text-3xl lg:text-5xl">Hey, <span className="text-[#005843]">see your</span> posted jobs and <span className="text-[#005843]">Course explore</span></h1>
            </div>
            <div data-aos="fade-down-left" className="flex pb-6 lg:mb-0">
              <button  className="mr-5 bg-[#005843] text-white lg:py-3 py-2 lg:px-9 md:px-7 px-6 rounded-full text-md font-medium hover:bg-[#005848] hover:shadow-lg hover:shadow-[#0E624E]">Course</button>
              <button className="border border-[#005843] text-[#005843] lg:py-3 py-2 lg:px-9 md:px-7 px-6 rounded-full hover:bg-[#005843] hover:text-white font-semibold hover:shadow-lg hover:shadow-[#0E624E]">Services</button>
            </div>
          </div>
          <div data-aos="fade-left" className="lg:w-[45%] w-11/12 h-full mx-auto lg:mx-0">
            <img className="w-full" src={banner} alt="" />
          </div>
        </div>
      </div>
          </div>
          {/* banner end */}
            <div className="bg-[#cccccca2] py-24">
              <div className="mb-12 text-center px-12 lg:px-96">
              <h2 className=" text-xl md:text-3xl font-bold mb-2">Hey, {user.email} Your Posted Jobs Here</h2>
              <p className="">Welcome to proLearnHub, your dedicated platform for nurturing lifelong learning and personal growth. We believe that learning is the key to unlocking opportunities and achieving your full potential. At proLearnHub, we provide a diverse array of courses and resources to empower your journey towards skill excellence. </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-5 mx-auto justify-center">
                {
                  myPostedJob.map(singleJob=><MyPostedJobCard
                  key={singleJob._id}
                  singleJob={singleJob}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  >

                  </MyPostedJobCard>)
                }
                </div>


            </div>
        </div>
    );
};

export default MyPostedJob;