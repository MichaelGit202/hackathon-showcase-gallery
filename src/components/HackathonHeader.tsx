
import React from 'react';

const HackathonHeader: React.FC = () => {
  return (
    <div className="text-center py-8 px-4 mb-8">
      <div className="flex justify-center items-center mb-6 space-x-8">
        {/* Logo placeholders - replace with actual logo images when available */}
        <div className="bg-hackathon-card p-2 rounded-md w-32 h-16 flex items-center justify-center border border-hackathon-accent/30">
          <span className="text-hackathon-accent font-medium">Behrend Logo</span>
        </div>
        
        <div className="inline-block bg-gradient-to-r from-hackathon-accent to-hackathon-accent2 p-[2px] rounded-lg">
          <div className="bg-hackathon-background rounded-lg px-6 py-2">
            <h4 className="font-inter font-medium text-hackathon-accent">ACM Behrend</h4>
          </div>
        </div>
        
        <div className="bg-hackathon-card p-2 rounded-md w-32 h-32 flex items-center justify-center border border-hackathon-accent/30">
          <img src='./src/data/assets/acm.png'></img>  
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-hackathon-accent to-hackathon-accent2 bg-clip-text text-transparent">
          Spring 2025 Hackathon
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Hosted by the Behrend ACM chapter, this year's hackathon categories included AI gesture-based Rock-Paper-Scissors game, an algorithmic trading system, and a health & wellness app. The event brought together passionate Behrend students to build, learn, and test their skills in just 8 hours.
      </p>
    </div>
  );
};

export default HackathonHeader;
