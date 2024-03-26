import React from 'react'
import image from "../asset/image.jpg"

const About = () => {
  return (
    <div className=' w-screen min-h-screen md:h-screen pt-24 flex flex-col md:flex-row-reverse'>
        <div className='h-1/2 w-screen flex items-center justify-center md:h-full md:w-1/2'>
            <img className=' w-[90%]' src={image} alt="" />
        </div>
        <div className='h-1/2 w-screen flex flex-col items-center justify-center mb-5 md:h-full md:w-1/2'>
            <div className=' max-w-[80%] flex flex-col gap-4 md:gap-10 md:max-w-[70%]'>
                <h1 className='text-xl font-bold md:text-5xl'>BIOGRAPHY</h1>
                <div className='flex flex-col gap-4 md:gap-7 md:text-lg'>
                <p >Hi! I'm <span className='font-semibold'>Anmol Garg</span>, a full stack web developer with passion in creating beautiful, functional, and user-centered digital experience. I am always looking for new and innovative ways to bring my client's vision to life.</p>
                <p>I believe that design is about more than just making things look pretty - it's just about solving problems and creating intiutive, enjoyable experience for users.</p>
                <p>Whether I'm working on a website, mobile app, or other digital product. I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About