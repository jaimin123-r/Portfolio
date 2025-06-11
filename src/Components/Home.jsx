import React from 'react';
import port from '../../public/portfo_img.jpg';
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import {ReactTyped} from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Text */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 text-center md:text-left">
            <span className="font-bold">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="ml-14 md:ml-0 font-bold">Hello, I'm </h1>
              <ReactTyped
                className="text-purple-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="md:text-md text-justify md:text-[17px]">
              I specialize in building responsive, scalable, and performance-driven web applications tailored to business goals. With a strong focus on user experience, clean code, and modern development practices, I help clients and companies turn ideas into impactful digital products. My goal is to deliver reliable, maintainable solutions that enhance engagement and drive results.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="text-center">Available on</h1>
                <ul className="flex space-x-3">
                  <li><SocialIcon icon={faInstagram} bg="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" url="https://instagram.com/jaimin_rathod_9534" /></li>
                  <li><SocialIcon icon={faFacebook} bg="bg-blue-600" url="https://www.facebook.com/rathod.jaimin.792" /></li>
                  <li><SocialIcon icon={faGithub} bg="bg-gray-800" url="https://github.com/jaimin123-r" /></li>
                  <li><SocialIcon icon={faLinkedin} bg="bg-blue-700" url="https://www.linkedin.com/in/rathod-jaimin-7972b1219/" /></li>
                </ul>
              </div>
              {/* MERN Icons */}
              <div className="space-y-2">
                <h1>Currently working on</h1>
                <div className="flex space-x-3">
                  <SiMongodb size={30} className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact size={30} className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress size={30} className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNode size={32} className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="md:w-1/2 order-1">
            <img src={port} className="h-full w-full md:ml-10 mt-8 rounded-full hover:scale-105 duration-200" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function SocialIcon({ icon, bg, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bg} w-12 h-12 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-300`}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}

export default Home;
