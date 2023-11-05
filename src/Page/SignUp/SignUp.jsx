
import { useContext } from 'react';
import {  FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const handleSignUpUser = (event) => {
          event.preventDefault()
          const form = event.target;
          const name = form.name.value;
          const photo = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;
          const signInUser = {
            name,
            photo,
            email,
            password,
          }
          createUser(email,password)
          .then(result=>{
            console.log(result.user)
          })
          .catch(error=>{
            console.log(error.message)
          })
  }
  return (
    <div>
  <div className="bg-gray-100 py-14 px-4 lg:px-0">
    <div className="hero-content">
      <div className="card py-12 text-center shadow-2xl bg-white w-full md:w-3/4 lg:w-2/3  mx-auto rounded-xl mt-4"> {/* Responsive width */}
        <form onSubmit={handleSignUpUser} className="card-body">
          <h1 className="md:text-4xl text-3xl font-bold mb-2">Create an account</h1>
          <p className="mb-6 text-[#343434] text-[14px] lg:text-base font-semibold">Connect with your friends today!</p>
          <div className="w-9/12 mx-auto">
            <div className="form-control">
              <input
                name="name"
                type="text"
                placeholder="Enter Your User Name"
                className="input border border-gray-400 p-[10px] rounded-xl w-full mb-6"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="photo"
                type="text"
                placeholder="Upload Your Photo Url"
                className="input border border-gray-400 p-[10px] rounded-xl w-full mb-6"
              />
            </div>
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="input border border-gray-400 p-[10px] rounded-xl w-full mb-6"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="password"
                type="password"
                placeholder="Enter Your Password"
                className="input border border-gray-400 p-[10px] rounded-xl w-full mb-6"
                required
              />
            </div>
             <div>
            <button className="bg-[#FEEC62] rounded font-semibold text-black py-3 md:px-14 px-12 inline-block mb-6">Sign Up</button>
            </div>
          </div>
        </form>
       
        <div className='flex justify-center items-center mb-5'>
          <div className='bg-gray-400 lg:w-[104px] md:w-[80px] w-[70px] h-[1px] mr-2'></div>
          <div><p className='text-gray-900'>Or With</p></div>
          <div className='bg-gray-400 lg:w-[104px] md:w-[80px] w-[70px] h-[1px] ml-2'></div>
          
        </div>
      <div className='bg-[#0E624E] w-9/12 flex justify-center items-center gap-x-3 py-[10px] rounded-lg mx-auto mb-[2px] hover:shadow-md hover:shadow-[#0e624e49]'> 
      <FaFacebook className='rounded-full text-2xl text-white bg-blue-600'></FaFacebook> 
     <button className='font-medium text-white'> Signup With Facebook</button>
      </div>
         <br />

      <div className='bg-transparent border border-gray-400 text-black w-9/12 flex justify-center items-center gap-x-3 py-[10px] rounded-lg mx-auto mb-6 hover:shadow-md hover:shadow-[#0e624e49]'> 
      <FaGoogle className='rounded-full text-xl'></FaGoogle>
     <button className='font-medium'> Signup With Google</button>
     </div>

        <p className="text-center mb-8 font-medium">
          Already have an account?
          <Link to='/login' className="font-bold ml-2 text-[#0E624E]">Login</Link>
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default SignUp;