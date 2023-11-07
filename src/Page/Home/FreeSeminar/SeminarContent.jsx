import { FaYoutube } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const SeminarContent = () => {
    useEffect(()=>{
        Aos.init({duration:600})
      },[])
    return (
        <div>
           <div data-aos="fade-right" className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 mb-5 bg-white rounded-md">
               <div className="flex">
                    <div className="bg-[#feec62] p-2 rounded-xl flex items-center">
                        <div className="mr-3">
                            <FaYoutube className="lg:text-2xl text-red-700"></FaYoutube>
                        </div>
                        <div>
                            <h3 className="text-sm md:text-lg">LEADERSHIP IN WEB DEVELOPMENT</h3>
                            <p className="text-xs md:text-sm">ProLearnHub | 9.00pm</p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <p className="text-xs md:text-sm">9 October | Offline + Online</p>
                </div>
                <div>
                    <button className="bg-[#feec62] py-2 px-3 rounded-xl">JOIN NOW</button>
                </div>
           </div>
           <div data-aos="fade-left" className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 mb-5 bg-white rounded-md">
               <div className="flex">
                    <div className="bg-[#feec62] p-2 rounded-xl flex items-center">
                        <div className="mr-3">
                            <FaYoutube className="lg:text-2xl text-red-700"></FaYoutube>
                        </div>
                        <div>
                            <h3 className="text-sm md:text-lg">LEADERSHIP IN WEB DEVELOPMENT</h3>
                            <p className="text-xs md:text-sm">ProLearnHub | 9.00pm</p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <p className="text-xs md:text-sm">9 October | Offline + Online</p>
                </div>
                <div>
                    <button className="bg-[#feec62] py-2 px-3 rounded-xl">JOIN NOW</button>
                </div>
           </div>
           <div data-aos="fade-right" className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 mb-5 bg-white rounded-md">
               <div className="flex">
                    <div className="bg-[#feec62] p-2 rounded-xl flex items-center">
                        <div className="mr-3">
                            <FaYoutube className="lg:text-2xl text-red-700"></FaYoutube>
                        </div>
                        <div>
                            <h3 className="text-sm md:text-lg">LEADERSHIP IN WEB DEVELOPMENT</h3>
                            <p className="text-xs md:text-sm">ProLearnHub | 9.00pm</p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <p className="text-xs md:text-sm">9 October | Offline + Online</p>
                </div>
                <div>
                    <button className="bg-[#feec62] py-2 px-3 rounded-xl">JOIN NOW</button>
                </div>
           </div>
        </div>
    );
};

export default SeminarContent;
