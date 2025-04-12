
import React from 'react';
import { Award, Medal } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { teamName, image, title, rank } = project;
  
  // Determine card styling based on rank
  const getCardClass = () => {
    switch (rank) {
      case 1:
        return 'gold-card';
      case 2:
        return 'silver-card';
      case 3:
        return 'bronze-card';
      default:
        return '';
    }
  };
  
  // Determine medal color based on rank
  const getBadgeDetails = () => {
    switch (rank) {
      case 1:
        return { color: 'bg-hackathon-gold text-black', emoji: '🥇', label: '1st Place' };
      case 2:
        return { color: 'bg-hackathon-silver text-black', emoji: '🥈', label: '2nd Place' };
      case 3:
        return { color: 'bg-hackathon-bronze text-black', emoji: '🥉', label: '3rd Place' };
      default:
        return null;
    }
  };
  
  const badgeDetails = getBadgeDetails();
  
  return (
    <div 
      className={`award-card bg-hackathon-card rounded-xl overflow-hidden transition-all duration-300 
                  hover:animate-card-hover shadow-lg ${getCardClass()}`}
    >
      {badgeDetails && (
        <div className={`award-badge ${badgeDetails.color} w-10 h-10`}>
          <span className="text-lg">{badgeDetails.emoji}</span>
        </div>
      )}
      
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{teamName}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
