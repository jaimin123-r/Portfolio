import React from 'react';

const ProjectCard = ({ image, title, description, languages, projectLink, codeLink }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={image} alt={title} className="w-full h-100 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 mb-2">{description}</p>
                <div className="flex flex-wrap mb-4">
                    {languages.map((lang, index) => (
                        <span key={index} className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">{lang}</span>
                    ))}
                </div>
                <div className="flex justify-between">
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors">View Project</a>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors">View Code</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
