

const BidRequestRow = () => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
  <td className="py-2 sm:py-4">
    <div className="space-x-3">
      <div>
        <div className="font-bold">Web Developer</div>
      </div>
    </div>
  </td>
  <td className="py-2 sm:py-4">
    job title
  </td>
  <td className="py-2 sm:py-4">
    email
  </td>
  <td className="py-2 sm:py-4">
    deadline
  </td>
  <td className="py-2 sm:py-4">
    price
  </td>
  <td className="py-2 sm:py-4">
    status
  </td>
  <th className="py-2 sm:py-4">
    <button className="btn btn-ghost btn-xs">accept button</button>
    <button className="btn btn-ghost btn-xs">rejected button</button>
  </th>
</tr>
    );
};

export default BidRequestRow;