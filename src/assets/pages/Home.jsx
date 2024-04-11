import React from 'react'
import kabras from '../img/kabra 123-01.jpg'

const Home = () => {
  return (
    <div className='h-screen w-screen p-10 bg-black'>
      <img className='rounded-2xl h-fit xl:h-[800px] w-full' src={kabras} alt="kabras" />
      <h1 className='  text-center  text-[#D5AA5D] xl:text-7xl'>coming soon</h1>
    </div>
  )
}

export default Home