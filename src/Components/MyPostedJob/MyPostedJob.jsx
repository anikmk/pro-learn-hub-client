import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Page/Providers/AuthProvider";
import MyPostedJobCard from "./MyPostedJobCard/MyPostedJobCard";
import Swal from "sweetalert2";



const MyPostedJob = () => {
    const {user} = useContext(AuthContext)
    const [myPostedJob,setMyPostedJob] = useState([])
    const url = `http://localhost:5000/addjobs?email=${user?.email}`

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
          fetch(`http://localhost:5000/addjobs/${id}`, {
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
    return (
        <div>
            <div className="bg-[#cccccca2] py-24">
              <div className="mb-12 text-center px-12 lg:px-96">
              <h2 className="text-3xl font-bold mb-2">Hey, {user.email} Your Posted Jobs Here</h2>
              <p className="">Welcome to proLearnHub, your dedicated platform for nurturing lifelong learning and personal growth. We believe that learning is the key to unlocking opportunities and achieving your full potential. At proLearnHub, we provide a diverse array of courses and resources to empower your journey towards skill excellence. </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto justify-center">
                {
                  myPostedJob.map(singleJob=><MyPostedJobCard
                  key={singleJob._id}
                  singleJob={singleJob}
                  handleDelete={handleDelete}
                  >

                  </MyPostedJobCard>)
                }
                </div>


            </div>
        </div>
    );
};

export default MyPostedJob;