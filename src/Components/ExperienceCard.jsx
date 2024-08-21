import React from 'react';

const ExperienceCard = ({ image, name }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={image} alt={name} className="w-full h-30 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
                <a href="#" className="block text-center bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors">Learn</a>
            </div>
        </div>
    );
}

export default ExperienceCard;
