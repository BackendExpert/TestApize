import React from 'react'
import LogoImg from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const WelcomPage = () => {
  return (
    <div className='bg-[#24292e] min-h-screen'>
        <div className="mx-32 text-white py-32 text-center">
            <h1 className="text-2xl font-semibold">TestAPIze</h1>
            <center className='mt-16'>
                <img src={LogoImg} alt="" className='h-36 w-atuo'/>
            </center>

            <h1 className="pt-16">API development and testing platform</h1>

            <div className="">
                <Link to={'/Start'}>
                    <button className="bg-blue-500 text-white py-2 px-8 rounded my-8">Get Started</button>                
                </Link>                
            </div>
        </div>
        <footer className='text-center text-white text-xs'>
            &copy; All Rights Reserved | 2024 | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank' className='text-blue-500'>jehankandy</a>
        </footer>
    </div>
  )
}

export default WelcomPage