import React from 'react'
import port from 'C:/Users/jaimi/Desktop/RJ/PORTFOLIO/public/portfo_img.jpg'
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { ReactTyped} from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <>
        <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>   
                {/*Left Text */}     
                <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 text-center md:text-left'>
                <span className='font-bold'>Welcome In My Feed</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl'>
                        <h1 className='ml-14 md:ml-0 font-bold'>Hello, I'am  </h1>
                        {/* <span className='text-red-700 font-bold'>Developer</span> */}
                        <ReactTyped
                        className='text-purple-700 font-bold'
                        strings={["Developer","Programer","Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                        />
                    </div>
                <br />
                <p className='md:text-md text-justify md:text-[17px]'>
                A highly motivated and driven fresher with a Bachelor's degree in Computer Applications (BCA) from Khyati Foundation,               
                seeking an opportunity to kickstart my career in the IT industry. Possess strong foundational knowledge in computer
                programming, data structures, algorithms, and software development principles gained through academic projects and
                coursework.Excellent problem-solving and analytical skills, with a keen interest in learning and adapting to new technologies. Committed to
                delivering high-quality work and contributing to the success of the organization.

                </p>
                <br />
                {/*Social Media Icons */}
              <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>  
                <div className='space-y-2'>
                    <h1 className='text-center'>Available on</h1>
                    <ul className='flex space-x-3'>
                        <li><SocialIcon icon={faInstagram} bg="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" to /></li>
                        <li><SocialIcon icon={faFacebook} bg="bg-blue-600"/></li>
                        <li><SocialIcon icon={faGithub} bg="bg-gray-800"  /></li>
                        <li><SocialIcon icon={faLinkedin} bg="bg-blue-700" /></li>
                    </ul>
                </div>
                {/* MERN ICONS */}
                <div className='space-y-2'>
                <h1>Currently working on</h1>
                    <div className='flex space-x-3'>
                        <SiMongodb size={30}    className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        <FaReact size={30}  className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        <SiExpress  size={30}   className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        <FaNode  size={32}  className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    </div>
                </div>
                </div>
                </div>

                {/*Right Image */}
                <div className='md:w-1/2 order-1 '>
                <img src={port}  className='h-full w-full md:ml-10 mt-8 rounded-full hover:scale-105 duration-200' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

function SocialIcon({ icon, bg }) {
    return (
      <a href="https://instagram.com/__r.j__0011" className={`${bg} w-12 h-12 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-300`}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    );
  }

export default Home
