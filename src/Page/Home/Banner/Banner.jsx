import img1 from '../../../assets/banner/digitalmarketing.jpg'
import img2 from '../../../assets/banner/graphicdesign.jpg'
import img3 from '../../../assets/banner/webdevelopment.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className='absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full'>
            <div className='space-y-4 pl-12 w-1/2'>
            <h2 className='text-white text-6xl font-bold'>Digital Marketing Mastery Boost Your Online Success</h2>
            <p className='text-white text-2xl'>Unleash your online potential with our comprehensive digital marketing courses. Learn, grow, and succeed!</p>
            <div>
            <button className='px-5 py-3 rounded-xl text-white mr-5 bg-[#005843]'>sevices</button>
              <button className='btn btn-outline btn-success'>contact</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className='absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full'>
            <div className='space-y-4 pl-12 w-1/2'>
            <h2 className='text-white text-6xl font-bold'>Graphic Design Excellence Unleash Your Creative Vision</h2>
            <p className='text-white text-2xl'>Unlock your creative potential with our graphic design courses. Master design, inspire, and innovate.</p>
            <div>
                <button className='px-5 py-3 rounded-xl text-white mr-5 bg-[#005843]'>sevices</button>
                <button className='btn btn-outline btn-success'>contact</button>
            </div>
            </div>
          </div>
          
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className='absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full'>
            <div className='space-y-4 pl-12 w-1/2'>
            <h2 className='text-white text-6xl font-bold'>Our car servecing center is here</h2>
            <p className='text-white text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatem exercitationem odio quasi numquam.</p>
            <div>
            <button className='px-5 py-3 rounded-xl text-white mr-5 bg-[#005843]'>sevices</button>
              <button className='btn btn-outline btn-success'>contact</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className='absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full'>
            <div className='space-y-4 pl-12 w-1/2'>
            <h2 className='text-white text-6xl font-bold'>Master Web Development Build Your Digital Future</h2>
            <p className='text-white text-2xl'>Empower yourself with web development skills for a brighter digital future. Learn today, lead tomorrow.</p>
            <div>
            <button className='px-5 py-3 rounded-xl text-white mr-5 bg-[#005843]'>sevices</button>
            <button className='btn btn-outline btn-success'>contact</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;