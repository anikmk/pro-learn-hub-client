import banner from '../../assets/banner/mybids.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Page/Providers/AuthProvider";
import MyBidsRow from "./MyBidsRow";
import Aos from 'aos';
import 'aos/dist/aos.css'

const MyBids = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
    const {user} = useContext(AuthContext)
    const [myBids,setMyBids] = useState([])
    const url =`https://pro-learn-hub-server-site.vercel.app/bidform?buyerEmail=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyBids(data)
        })
    },[url])
    return (
        <div>
    
    <div className="bg-[#fff] pt-12 pb-28">
      <div className="w-11/12 mx-auto">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-[55%] xl:w-[45%] w-[90%]">
            <div data-aos="slide-down" className="text-left md:pb-8 py-5">
               <h1 className="text-black uppercase font-semibold md:text-6xl text-3xl lg:text-5xl">Here, <span className="text-[#005843]">you can explore</span>the various <span className="text-[#005843]">opportunities</span></h1>
            </div>
            <div data-aos="slide-right" className="flex pb-6 lg:mb-0">
              <button className="mr-5 bg-[#005843] text-white lg:py-3 py-2 lg:px-9 md:px-7 px-6 rounded-full text-md font-medium hover:bg-[#005848] hover:shadow-lg hover:shadow-[#0E624E]">Course</button>
              <button className="border border-[#005843] text-[#005843] lg:py-3 py-2 lg:px-9 md:px-7 px-6 rounded-full hover:bg-[#005843] hover:text-white font-semibold hover:shadow-lg hover:shadow-[#0E624E]">Services</button>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="lg:w-[45%] w-11/12 h-full mx-auto lg:mx-0">
            <img className="w-full" src={banner} alt="" />
          </div>
        </div>
      </div>
          </div>
    {/* banner end */}
    <div className="overflow-x-auto py-10 bg-slate-200">
  <table className="table w-full md:w-3/4 lg:w-[95%] mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th className='p-2 md:p-4'>Job Title</th>
        <th className='p-2 md:p-4'>Email</th>
        <th className='p-2 md:p-4'>Dead Line</th>
        <th className='p-2 md:p-4'>Status</th>
        <th className='p-2 md:p-4'></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   
    {
        myBids.map(mybid=><MyBidsRow
        key={mybid._id}
        mybid={mybid}
        >  
        </MyBidsRow>)
     }
    
    </tbody>  
  </table>
</div>
        </div>
    );
};

export default MyBids;