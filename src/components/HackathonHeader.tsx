
import React from 'react';

const HackathonHeader: React.FC = () => {
  return (
    <div className="text-center py-8 px-4 mb-8">
      <div className="inline-block bg-gradient-to-r from-hackathon-accent to-hackathon-accent2 p-[2px] rounded-lg mb-4">
        <div className="bg-hackathon-background rounded-lg px-6 py-2">
          <h4 className="font-inter font-medium text-hackathon-accent">TechInnovate 2025</h4>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-hackathon-accent to-hackathon-accent2 bg-clip-text text-transparent">
        Hackathon Showcase
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Celebrating innovation and creativity across AI, finance, and health technologies. 
        Browse through our winning projects and all amazing submissions.
      </p>
    </div>
  );
};

export default HackathonHeader;
