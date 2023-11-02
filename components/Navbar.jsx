import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const navbar = () => {
  return (
    <div>
      <nav className='flex items-center flex-wrap bg-blue-400 p-3 drop-shadow-2xl'>
        <Link href='/'>
          <h3 className='inline-flex items-center '>
            <Image src="/logo.png" width={50} height={50} alt="logo"/>
            <span className='text-3xl text-white font-bold uppercase tracking-wide pl-2 pt-4 '>
              Arogya
            </span>
          </h3>
        </Link>
      
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto items-center'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full   flex flex-col lg:h-auto items-center'>
            <Link href='/'>
              <h3 className='lg:inline-flex font-sans lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center text-xl hover:bg-blue-500 hover:text-white '>
                Home
              </h3>
            </Link>
            <Link href='/'>
              <h3 className='lg:inline-flex font-sans lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center text-xl hover:bg-blue-500 hover:text-white'>
                About us
              </h3>
            </Link>
            <Link href='/'>
              <h3 className='lg:inline-flex font-sans lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center text-xl hover:bg-blue-500 hover:text-white'>
                Contact us
              </h3>
            </Link>
            <Link href='/loginform'>
              <h3 className='lg:inline-flex font-sans lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center text-xl hover:bg-blue-500 hover:text-white'>
                Login
              </h3>
            </Link>
          </div>
        </div>
      </nav>
      <Marquee className='pl-2 pt-6 text-2xl text-red-600 font-sans'>
  Please  <Link href='/donordetails' className='pl-2 text-blue-600 underline'>  Click Here </Link> &nbsp; To Get Available Donor Information. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Please  <Link href='/' className='pl-2 text-blue-600 underline'>  Click Here </Link> &nbsp; To Get Blood-Bank Information.</Marquee>
<div className='pt-6'>
       <nav className=' pl-96 bg-blue-400 p-3 drop-shadow-2xl'>
      <div className=''>&nbsp;&nbsp;&nbsp;&nbsp;

     <Link href='/userregister'> <button type="button"className ="text-gray-800  font-medium text-lg drop-shadow-2xl bg-gradient-to-r from-cyan-400 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">User Sign-Up</button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Link href='/doctorregister'><button type="button" className="text-gray-800  font-medium text-lg drop-shadow-2xl bg-gradient-to-r from-cyan-400 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">Doctor Sign-Up</button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Link href='/hospitallabregister'><button type="button" className="text-gray-800  font-medium text-lg drop-shadow-2xl bg-gradient-to-r from-cyan-400 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">Hospital Sign-Up</button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </div>
        </nav> </div>
    
    </div>
  )
}

export default navbar