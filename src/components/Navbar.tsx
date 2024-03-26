import React from 'react'
import { Link ,useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className={`h-24 w-screen flex items-center justify-center fixed bg-white`}>
            <div className='w-[95%] flex items-center justify-between'>
                <div className='md:w-1/3 flex justify-center'>
                <Link to="/" >
                    <div className=' bg-black p-[10px] rounded-full md:p-[14px]'>
                        <p className=' text-white text-[20px] font-semibold md:text-[25px]'>AG</p>
                    </div>
                </Link>
                </div>
                <ul className='md:initial md:flex justify-center gap-5 text-xl font-semibold w-1/3 md:text-2xl'>
                    <li className={`hidden md:block p-2 border-b-2 border-transparent${location.pathname==='/'?"border-b-2 border-black":" border-0"}`}><Link to="/">Home</Link></li>
                    <li className={`p-2 border-b-2 border-transparent${location.pathname==='/about'?"border-b-2 border-black":" border-0"}`}><Link to="/about">About</Link></li>
                    {/* <li className={`p-2 border-b-2 border-transparent${location.pathname==='/experience'?"border-b-2 border-black":" border-0"}`}><Link to="/experience">Experience</Link></li>
                    <li className={`p-2 border-b-2 border-transparent${location.pathname==='/contact'?"border-b-2 border-black":" border-0"}`}><Link to="/contact">Contact</Link></li> */}
                </ul>
                <div className=' flex justify-center gap-4 text-[28px] w-1/3 md:text-[35px]'>
                    <Link to='https://www.linkedin.com/in/anmol-garg27/' target='_blank'><i className="fa-brands fa-linkedin text-blue-800"></i></Link>
                    <Link to='https://github.com/anmol2710' target='_blank'><i className="fa-brands fa-github"></i></Link>
                    <Link to='https://www.upwork.com/freelancers/~0190a6f359e36bfc23?mp_source=share' target='_blank'><i className="fa-brands fa-upwork text-green-600"></i></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar