import React from 'react'
import {Link} from "react-router-dom"
import image from "../asset/image.png"

const Home = () => {
  return (
    <div className='w-screen min-h-screen md:h-screen pt-24'>
        <div className=' h-full w-screen flex flex-col md:flex-row'>
          <div className='w-full h-1/2 md:w-1/2 md:h-full flex items-center justify-center'>
            <img className=' w-[85%] md:w-[60%]' src={image} alt="" />
          </div>
          <div className='w-full h-1/2 md:w-1/2 md:h-full flex items-center justify-center'>
            <div className=' max-w-[90%] flex flex-col gap-3'>
              <h1 className='text-2xl font-bold md:text-6xl'>Turning Vision into Reality with Code And Design.</h1>
              <p className='text-md md:text-[22px]'>As a skilled full stack developer. I am dedicated to turning ideas into inovative web applications.</p>
              <Link to="https://www.linkedin.com/in/anmol-garg27/" target='_blank' className='w-fit font-semibold p-3 border-2 border-black rounded-lg hover:bg-black hover:text-white md:text-xl md:w-fit'>Contact</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home