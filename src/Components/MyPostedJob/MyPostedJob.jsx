import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Page/Providers/AuthProvider";
import MyPostedJobCard from "./MyPostedJobCard/MyPostedJobCard";



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
    return (
        <div>
            <div className="bg-[#cccccca2] py-24">
              {myPostedJob.length}
              <div className="mb-12 text-center px-12 lg:px-96">
              <h2 className="text-3xl font-bold mb-2">Hey, {user.email} Your Posted Jobs Here</h2>
              <p className="">Welcome to proLearnHub, your dedicated platform for nurturing lifelong learning and personal growth. We believe that learning is the key to unlocking opportunities and achieving your full potential. At proLearnHub, we provide a diverse array of courses and resources to empower your journey towards skill excellence. </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto justify-center">
                {
                  myPostedJob.map(singleJob=><MyPostedJobCard
                  key={singleJob._id}
                  singleJob={singleJob}
                  >

                  </MyPostedJobCard>)
                }
                </div>


            </div>
        </div>
    );
};

export default MyPostedJob;