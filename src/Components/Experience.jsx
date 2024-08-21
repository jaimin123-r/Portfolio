import React from 'react';
import ExperienceCard from './ExperienceCard';

// Image placeholders, you can replace these with actual images
const images = {
    HTML: 'https://via.placeholder.com/300x200?text=HTML',
    CSS: 'https://via.placeholder.com/300x200?text=CSS',
    JavaScript: 'https://via.placeholder.com/300x200?text=JavaScript',
    Java: 'https://via.placeholder.com/300x200?text=Java',
    CSharp: 'https://via.placeholder.com/300x200?text=C%23',
    MySQL: 'https://via.placeholder.com/300x200?text=MySQL',
    MongoDB: '../../public/mongodb.jpg',
    React: '../../public/React.jpg',
    Node: '../../public/node.jpg',
    Express: '../../public/express.jpg',
    Python: 'https://via.placeholder.com/300x200?text=Python',
    DotNet: 'https://via.placeholder.com/300x200?text=.NET'
};

const skills = [
    'HTML', 'CSS', 'JavaScript', 'Java', 'C#', 'MySQL', 'MongoDB', 'React', 'Node', 'Express.js', 'Python', '.NET'
];

const Experience = () => {
    return (
        <div name="Experience" className="p-6">
            {/* <h1 className="text-3xl font-bold text-center mb-8">My Experience</h1> */}
            <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 mb-10 clip-polygon">
             <h1 className="text-4xl font-bold mb-2 animate-fadeInDown">My Experience</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <ExperienceCard
                        key={index}
                        image={images[skill]}
                        name={skill}
                    />
                ))}
            </div>
        </div>
    );
}

export default Experience;
