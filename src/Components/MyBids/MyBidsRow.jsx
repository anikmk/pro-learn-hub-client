

const MyBidsRow = ({mybid}) => {
       console.log(mybid)
        const {buyerEmail,deadline,status} = mybid
    return (   
             <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="space-x-3">
            
            <div>
              <div className="font-bold">Web Developer</div>
              
            </div>
          </div>
        </td>
        <td>
         {buyerEmail} 
        </td>
        <td>{deadline}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{status}</button>
        </th>
      </tr>
       
    );
};

export default MyBidsRow;