import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
       
            <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-5">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <a href="https://instagram.com/__r.j__0011" target="_blank" className="relative inline-block px-2.5 py-2">
                        <SocialIcon icon={faInstagram} bg="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
                        </a>
                        <a href="https://github.com/JaiminRathod" target="_blank" className="relative inline-block px-2.5 py-2">
                        <SocialIcon icon={faFacebook} bg="bg-blue-600" />
                        </a>
                        <a href="https://linkedin.com/in/jaimin-rathod-5632b21ba" target="_blank" className="relative inline-block px-2.5 py-2">
                        <SocialIcon icon={faGithub} bg="bg-gray-800" />
                        </a>
                        <a href="https://www.facebook.com/jaimin.rathod" target="_blank" className="relative inline-block px-2.5 py-2">
                        <SocialIcon icon={faLinkedin} bg="bg-blue-700"/>
                        </a>
                    </div> 
                    <div className='flex flex-col items-center mt-2 border-t border-gray-700 pt-8'>
                      <p className="text-sm">&copy; 2023 Jaimin Rathod. All rights reserved.</p> 
                      <br />
                      <span className='text-sm'>Thanks for Visit ❤️</span>
                    </div>
                </div>
            </footer>

    
    )
}

function SocialIcon({ icon, bg }) {
    return (
      <a href="#" className={`${bg} w-12 h-12 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-300`}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    );
  }
export default Footer
