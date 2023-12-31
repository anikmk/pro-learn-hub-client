

const MyBidsRow = ({mybid}) => {
       console.log(mybid)
        const {selleremail,deadline,status,category} = mybid
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
    {selleremail}
  </td>
  <td className="py-2 sm:py-4">
    {deadline}
  </td>
  <th className="py-2 sm:py-4">
    <button className="btn btn-ghost btn-xs">{status}</button>
  </th>
</tr>

       
    );
};

export default MyBidsRow;