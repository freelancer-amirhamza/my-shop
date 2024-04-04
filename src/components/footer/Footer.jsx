
import { IoCallOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <section className='bg-[#292828] footer'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto w-full py-9">
            <div className='grid md:grid-cols-4 grid-cols-1 justify-center items-center sm:grid-cols-2 gap-10 pt-8'>
              <div className='flex flex-col'>
                <h1 className=" w-full uppercase text-3xl text-[#ecd0c1] flex font-bold"> My Shop</h1>

                <p className='text-md text-gray-300 w-10/12 flex my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum nobis perspiciatis amet? </p>
                <p className='text-md text-gray-300 md:mt-4 md:mb-10 my-4'>625 E Franklin Ave, Minneapolis, <br/>  MN 55404, USA</p>
              </div>
              <div>
                <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>About us</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li><a className='text-md text-gray-300 capitalize' href="./">Our story</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">designer</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">craftsmanship</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">sustainability</a></li>
                  </ul>
                </div>
              </div>
              <div>
              <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>Support</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li><a className='text-md text-gray-300 capitalize' href="./">FAQ&apos;s</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">shipping & returns</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">care guide</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">warranty</a></li>
                  </ul>
                </div>
              </div>
              <div>
              <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>Contact us</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li className='flex gap-5 text-md text-gray-300 items-center'>
                        <span><a href="tel:+2 666327232147"> <IoCallOutline className='text-2xl'/> </a></span>
                        <span><a href="tel:+2 666327232147">+2 666327232147</a></span>
                    </li>
                    <li className='flex gap-5 text-md text-gray-300 items-center'>
                        <span><a href="mailto:amirhamza27940@gmail.com"> <HiOutlineMail className='text-2xl' /></a></span>
                        <span><a href="mailto:amirhamza27940@gmail.com">amirhamza27940@gmail.com</a></span>
                    </li>
                    <li className='flex gap-5 text-md text-gray-300 items-center my-6 ml-3'>
                        <span><a href="mailto:amirhamza27940@gmail.com"> <FaFacebookF className='text-2xl' /></a></span>
                        <span><a href="mailto:amirhamza27940@gmail.com"><BsInstagram className='text-2xl'/> </a></span>
                        <span><a href="mailto:amirhamza27940@gmail.com"><AiOutlineTwitter className='text-2xl'/></a></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=' pt-5'>
              <p className='capitalize flex items-center text-gray-500 justify-center gap-4'>
              <span><a href="./">Privacy policy</a></span> | 
              <span><a href="./">term of usw</a></span> | 
              <span><a href="./">california code</a></span>
                </p>
                <p className='text-md flex items-center text-gray-500 justify-center gap-4'>&copy;{new Date().getFullYear()} <a className='underline font-bold' href="https://amirhamzadev.com">Amir Hamza</a>. All rights reserved.</p>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Footer