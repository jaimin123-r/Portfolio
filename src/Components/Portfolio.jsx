import React from 'react';
import ProjectCard from './Project_card'
import apple from '../../public/apple.png'
import microsoft from '../../public/microsoft.png'
import netflix from '../../public/netflix.png'
import portfolio from '../../public/portfolio_web.png'
import comingsoon from '../../public/comingsoon.jpeg'
import mili from '../../public/milienterprise.png'

const projects = [
    {
        image: mili,
        title: 'Milienterprise',
        description: 'Milienterprise is a fabrication company providing services for different types of fabrication works.In this project i have used Hostinger for hosting.',
        languages: ['HTML', 'CSS','JAVASCRIPT'],
        projectLink: 'https://milienterprise.in/',
        codeLink: 'https://github.com/jaimin123-r/Mili_Enterprise'
    },
    {
        image: portfolio,
        title: 'Portfolio',
        description: 'You are seeing right now this project',
        languages: ['REACT','HTML', 'CSS','JAVASCRIPT'],
        projectLink: 'https://rjaiminportfolio.netlify.app/',
        codeLink: 'https://github.com/jaimin123-r/Portfolio'
    },  
    {
        image: "../../public/biteandbun.png",
        title: 'Bite & Bun',
        description: 'Developed a food delivery website inspired by McDonalds UI/UX. Features include menu display, add to cart, and a mobile-friendly navbar.I hosted this website on netlify.',
        languages: ['REACT', 'NODE','MONGODB','HTML', 'CSS','JAVASCRIPT'],
        projectLink: 'https://biteandbun.netlify.app/',
        codeLink: 'https://github.com/jaimin123-r/Bite_and_Bun'
    },
    {
        image: "../../public/UseHomePage.png",
        title: 'Towing Squad',
        description: 'Towing Squad is my college last year project. Designed to manage and display vehicles towed from no-parking zones.In this project having admin panel, officer panel, traffic police panel and user dashboard.',
        languages: ['REACT','EXPRESS','NODE','MONGODB','TAILWIND CSS'],
        projectLink: '#',
        codeLink: 'https://github.com/jaimin123-r'
    },
    {
        image: "../../public/essence.png",
        title: 'Essence Perfumes',
        description: 'Essence is my first project for my friend. I have done this project using HTML and CSS.I hosted this website on netlify.',
        languages: ['HTML','CSS'],
        projectLink: 'https://itsessence.netlify.app',
        codeLink: 'https://github.com/jaimin123-r'
    },
    {
        image: comingsoon,
        title: 'IOT Project',
        description: 'This is IOT project from InfoLabz company (I done my intership there).',
        languages: ['C++'],
        projectLink: '#',
        codeLink: '#'
    },

];

const Portfolio = () => {
    return (
        <div name="Portfolio" className="p-6">
            {/* <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1> */}
            <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-10 mb-10 clip-polygon">
             <h1 className="text-4xl font-bold mb-2 animate-fadeInDown">My Projects</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        languages={project.languages}
                        projectLink={project.projectLink}
                        codeLink={project.codeLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
