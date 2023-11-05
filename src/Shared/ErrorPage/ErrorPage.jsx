
import { Link } from 'react-router-dom';
import errorImg from '../../assets/error/error-page.jpg'
const ErrorPage = () => {
    return (
        <div>
        <div className='flex justify-center items-center'>
        <img className='w-[40%]' src={errorImg} alt="" />
            
        </div>
        <div className='text-center flex justify-center items-center'>
        <Link to='/'><button className='bg-[#005843] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>GO HOME</button></Link>
        </div>
   
        </div>
    );
};

export default ErrorPage;