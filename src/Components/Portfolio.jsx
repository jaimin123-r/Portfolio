import React from 'react';
import ProjectCard from './Project_card'
import apple from '../../public/apple.png'
import microsoft from '../../public/microsoft.png'
import netflix from '../../public/netflix.png'
import portfolio from '../../public/portfolio_web.png'
import comingsoon from '../../public/comingsoon.jpeg'

const projects = [
    {
        image: netflix,
        title: 'Netflix Clone',
        description: 'When i was in Atul Auto company then i completed.This is my first project.',
        languages: ['HTML', 'CSS','JAVASCRIPT','PHP','MYSQL'],
        projectLink: '#',
        codeLink: '#'
    },
    {
        image: microsoft,
        title: 'Microsoft Clone',
        description: 'Microsoft.com clone.',
        languages: ['HTML', 'CSS'],
        projectLink: '#',
        codeLink: '#'
    },
    {
        image: apple,
        title: 'Apple Clone',
        description: 'This is my designing project from infoLabz company',
        languages: ['HTML', 'CSS'],
        projectLink: '#',
        codeLink: '#'
    },
    {
        image: portfolio,
        title: 'Portfolio',
        description: 'You are seeing right now this project',
        languages: ['REACT','HTML', 'CSS','JAVASCRIPT'],
        projectLink: '#',
        codeLink: '#'
    },
    {
        image: comingsoon,
        title: 'Food & Food ',
        description: 'Coming soon...',
        languages: ['REACT', 'NODE','MONGODB','HTML', 'CSS','JAVASCRIPT'],
        projectLink: '#',
        codeLink: '#'
    },
    {
        image: comingsoon,
        title: 'Chat App',
        description: 'Coming soon...',
        languages: ['REACT', 'NODE','MONGODB'],
        projectLink: '#',
        codeLink: '#'
    }
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
