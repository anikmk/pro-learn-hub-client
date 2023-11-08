import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Page/Providers/AuthProvider";
import BidRequestRow from "./BidRequestRow";


const BidRequest = () => {
          const {user} = useContext(AuthContext)
          console.log(user.email)
          const [requestData,setRequestData] = useState([]);
          useEffect(()=>{
            fetch(`https://pro-learn-hub-server-site.vercel.app/requpdate?buyeremail=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
              setRequestData(data)
            })
          },[])

    return (
        <div>
      
    <div className="overflow-x-auto py-10 bg-slate-200">
  <table className="table w-full md:w-3/4 lg:w-[95%] mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th className='p-2 md:p-4'>Job Title</th>
        <th className='p-2 md:p-4'>Email</th>
        <th className='p-2 md:p-4'>Dead Line</th>
        <th className='p-2 md:p-4'>Price</th>
        <th className='p-2 md:p-4'>Status</th>
        <th className='p-2 md:p-4'>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
          requestData.map(data=><BidRequestRow
          key={data.email}
          data={data}
          >

          </BidRequestRow>)
        }
    
    </tbody>  
  </table>
</div>
        </div>
    );
};

export default BidRequest;