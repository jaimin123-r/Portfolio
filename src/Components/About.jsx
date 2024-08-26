import React from 'react';
import my from '../../public/My-1.jpg'


const skills = ['Python','C/C++', 'C#', '.NET', 'MySQL', 'Java', 'HTML', 'CSS','Bootstrap', 'JavaScript','React','Node','Express','MongoDB','Tailwind css'];
const interests = ['Artificial Intelligence', 'Open Source Contributing', 'Competitive Programming', 'Reading Tech Blogs', 'Playing Chess', 'Hiking'];

function About() {
  return (
    <div name="About" className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-10 mb-10 clip-polygon">
        <h1 className="text-4xl font-bold mb-2 animate-fadeInDown">About Us</h1>
        <p className="text-xl animate-fadeInUp">Aspiring Web Developer</p>
      </header>

      <main className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <img src={my} alt="John Doe" className=" h-48 rounded-full border-4 border-white shadow-lg scale-150" />
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 relative inline-block">About Me</h2>
            <p className="mb-4">Hello! I'm a passionate BCA student at khyati school of computer application, pursuing my Bachelor's degree in Computer Applications. I have a keen interest in web development and coding, and I love creating innovative solutions to real-world problems.</p>
            <p className="mb-4">Email: jaiminrathod412@gmail.com</p>
            <a href="mailto:jaiminrathod412@gmail.com" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow duration-300">Contact Me</a>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 relative inline-block">My Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 cursor-default">{skill}</span>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 relative inline-block">Interests & Hobbies</h2>
            <ul className="list-disc list-inside">
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </section>
        </div>

       
      </main>
    </div>
  );
}

// function SocialIcon({ icon, bg }) {
//   return (
//     <a href="#" className={`${bg} w-10 h-10 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-300`}>
//       <FontAwesomeIcon icon={icon} />
//     </a>
//   );
// }

export default About;
