import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <ul className="flex space-x-3 m-4">
            <li>
              <SocialIcon
                icon={faInstagram}
                bg="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                url="https://instagram.com/jaimin_rathod_9534"
              />
            </li>
            <li>
              <SocialIcon
                icon={faFacebook}
                bg="bg-blue-600"
                url="https://www.facebook.com/rathod.jaimin.792"
              />
            </li>
            <li>
              <SocialIcon
                icon={faGithub}
                bg="bg-gray-800"
                url="https://github.com/jaimin123-r"
              />
            </li>
            <li>
              <SocialIcon
                icon={faLinkedin}
                bg="bg-blue-700"
                url="https://www.linkedin.com/in/rathod-jaimin-7972b1219/"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mt-2 border-t border-gray-700 pt-8">
          <p className="text-sm">
            &copy; 2027 Jaimin Rathod. All rights reserved.
          </p>
          <br />
          <span className="text-sm">Thanks for Visit ❤️</span>
        </div>
      </div>
    </footer>
  );
};

function SocialIcon({ icon, bg,url }) {
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
export default Footer;
