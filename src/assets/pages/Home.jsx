import React from 'react'
import kabras from '../img/kabra 123-01.jpg'

const Home = () => {
  return (
    <div className='h-screen w-screen p-10 bg-black'>
      <img className='rounded-2xl h-fix xl:h-[910px] w-full' src={kabras} alt="kabras" />
    </div>
  )
}

export default Home