import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Page/Providers/AuthProvider";

const NavBar = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const handleLogOutUser = () => {
    logOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to='/' className="hover:text-[#c5c5c5]">HOME</Link>
      </li>
      <li>
        <Link to='/addjob' className="hover:text-[#c5c5c5]">ADD JOB</Link>
      </li>
      <li>
        <Link className="hover:text-[#c5c5c5]">MY POSTEDJOBS</Link>
      </li>
      <li>
        <Link className="hover:text-[#c5c5c5]">MY BIDS</Link>
      </li>
      <li>
        <Link className="hover:text-[#c5c5c5]">BID REQUESTS</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#005843] px-12 text-white h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#005843] rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-">ProLearnHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="avatar online mr-4">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <p>{user.email}</p>
            </div>
          </div>
        )}
        {user ? (
          <button onClick={handleLogOutUser}>LOG OUT</button>
        ) : (
          <Link to="/login">
            <button>LOG IN</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
