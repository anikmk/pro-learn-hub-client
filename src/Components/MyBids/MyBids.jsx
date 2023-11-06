import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Page/Providers/AuthProvider";
import MyBidsRow from "./MyBidsRow";


const MyBids = () => {
    const {user} = useContext(AuthContext)
    const [myBids,setMyBids] = useState([])
    const url =`http://localhost:5000/bidform?buyerEmail=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyBids(data)
        })
    },[url])
    return (
        <div>
        
            <h1>my bids page {myBids.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Job Title</th>
        <th>Email</th>
        <th>Dead Line</th>
        <th>Status</th>
        <th></th>
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