

const BidRequestRow = ({data}) => {
  const {_id,buyeremail,category,deadline,price,selleremail,status}= data
  console.log(data)
  const handleAccept = () =>{
          fetch(`https://pro-learn-hub-server-site.vercel.app/requestaccepted/${_id}`,{
            method:"PUT",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({status:"progress"})
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)

          })
  }
  const handleReject = () =>{
          fetch(`https://pro-learn-hub-server-site.vercel.app/requestaccepted/${_id}`,{
            method:"PUT",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({status:"Rejected"})
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)

          })
  }
  const handleComplete = () =>{
          fetch(`https://pro-learn-hub-server-site.vercel.app/requestaccepted/${_id}`,{
            method:"PUT",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({status:"Completed"})
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)

          })
  }

  
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
  <td className="py-2 sm:py-4">
    <div className="space-x-3">
      <div>
        <div className="font-bold">{category}</div>
      </div>
    </div>
  </td>
  <td className="py-2 sm:py-4">
    {buyeremail}
  </td>
  <td className="py-2 sm:py-4">
    {deadline}
  </td>
  <td className="py-2 sm:py-4">
    ${price}
  </td>
  <td className="py-2 sm:py-4">
    {status}
  </td>
  <th className="py-2 sm:py-4">
    {
      status === "Rejected" ? '':
      status === "progress" ? <button onClick={handleComplete}>Complete</button> : status === "Completed" ? '' :
      <>
      <button onClick={handleAccept} className="btn btn-ghost btn-xs">Accept</button>
     <button onClick={handleReject} className="btn btn-ghost  btn-xs">Reject</button>
      </>
    }
  </th>
</tr>
    );
};

export default BidRequestRow;