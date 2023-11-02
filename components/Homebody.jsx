import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Homebody = () => {
  return (
    <div className='pt-20'>
    <div className='bg-sky-100'>
    <div className="grid grid-cols-3 gap-4">
 
  <div className="col-span-2 font-bold uppercase pt-10 pl-10 text-blue-400 text-6xl">Arogya Digital Mission
  <div className='text-black text-5xl pt-6'>Creating India's Digital Health Ecosystem</div>
  <div className='text-black text-3xl pt-6'> Start Your Digital Health Journey</div>
  <div className='text-black text-3xl pt-2'> <Link href='/login'><button type="button" class="text-gray-800  font-medium text-lg bg-gradient-to-r from-cyan-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">Login To Arogya Digital</button></Link></div></div>
  <div className="grid justify-items-end pr-20 pt-10">
  <Image src="/monitor.png" width={300} height={150} alt="logo"/>
  </div>
 
</div></div>

</div>
  )
}

export default Homebody