import React, { useState } from 'react'
import port from 'C:/Users/jaimi/Desktop/RJ/PORTFOLIO/public/portfo_img.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {Link} from 'react-scroll'
// import toast from 'react-hot-toast';
import AuthForm from './AuthForm';

export default function Navbar() {

  {/* button event */}
  const [showLogin, setShowLogin] = useState(false);

  const btnClick = () => {

    setShowLogin(!showLogin);
    setMenu(false);
    // toast('Welcome from Jaimin!',
    //   {
    //     icon: '❤️',
    //     style: {
    //       borderRadius: '10px',
    //       background: '#333',
    //       color: '#fff',
    //     },
    //   }

    // );
  }

  const [menu,setMenu]=useState(false)
  const navItems=[
    {
        id:1,
        title:"Home"
    },
    {
        id:2,
        title:"About"
    },
    {
        id:3,
        title:"Portfolio"
    },
    // {
    //     id:4,
    //     title:"Experience"
    // },
    {
        id:4,
        title:"Contact"
    }
  ]

  return (
    <>
      <div className='bg-white z-50 max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2 cursor-pointer'>
                <img src={port} className='h-12 w-104 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer text-purple-700'>Jaimin<span className='text-orange-600 text-2xl hover:scale-200 duration-200 transition'>R</span>
                <p className='text-sm text-purple-700'>Web Developer</p>
                </h1>
            </div>
            {/* Desktop Navbar */}
            <div className='flex space-x-5 items-center'>
                <ul className='hidden md:flex space-x-5'>
                  {
                    navItems.map(({id,title})=>(
                      <li key={id} 
                      className='text-xl hover:scale-110 duration-200 cursor-pointer hover:underline decoration text-purple-700 font-bold'>
                         <Link to={title} smooth={true} duration={500} offset={-70} activeClass='active'>{title}</Link>
                        </li>
                    ))
                  }
                </ul>
                <button className='bg-purple-700 text-white rounded-md p-1.5 hidden md:block' onClick={btnClick}>Login/Signup</button>
                <div onClick={()=> setMenu(!menu)} className='md:hidden cursor-pointer'>{!menu ? <GiHamburgerMenu size={24}/>: <MdClose size={24}/>}</div>
            </div>
        </div>
        {/* Mobile Navbar*/}
        {
          menu && (
              <div className='bg-white'>
                      <ul className='md:hidden flex flex-col h-96 items-center justify-center space-y-4 '>
                      {
                    navItems.map(({id,title})=>(
                      <li key={id} className=' text-purple-700 hover:scale-125 duration-200 transition duration cursor-pointer hover:underline text-xl'>
                         <Link onClick={()=> setMenu(!menu)} to={title} smooth={true} duration={500} offset={-70} activeClass='active' >{title}</Link>
                      </li>
                    ))
                  }
                          <button className='bg-purple-700  text-white rounded-md p-1.5' onClick={btnClick}>Login/Signup</button>
                      </ul>
                    
              </div>
          )
        }
        {/* Login Form rendering */}
        {
          showLogin && <AuthForm setShowLogin={setShowLogin}/>
        }
      </div>
    </>
  )
}

