
import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import { Project, projects } from '../data/projects';
import { Gesture, BarChart3, Heart } from 'lucide-react';

const ProjectTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai-gestures' | 'algorithmic-trading' | 'health-wellness'>('ai-gestures');
  
  const getFilteredProjects = (): Project[] => {
    return projects.filter(project => project.category === activeTab);
  };
  
  const getTabClass = (tabName: typeof activeTab) => {
    return `px-6 py-4 rounded-t-lg text-base font-medium transition-all ${
      activeTab === tabName ? 'tab-active' : 'tab-inactive'
    }`;
  };
  
  return (
    <div className="max-w-7xl mx-auto mb-20">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row border-b border-gray-700 mb-8 px-4 overflow-x-auto">
        <button
          className={getTabClass('ai-gestures')}
          onClick={() => setActiveTab('ai-gestures')}
        >
          <div className="flex items-center space-x-2">
            <Gesture size={18} />
            <span>AI Gestures</span>
          </div>
        </button>
        
        <button
          className={getTabClass('algorithmic-trading')}
          onClick={() => setActiveTab('algorithmic-trading')}
        >
          <div className="flex items-center space-x-2">
            <BarChart3 size={18} />
            <span>Algorithmic Trading</span>
          </div>
        </button>
        
        <button
          className={getTabClass('health-wellness')}
          onClick={() => setActiveTab('health-wellness')}
        >
          <div className="flex items-center space-x-2">
            <Heart size={18} />
            <span>Health & Wellness</span>
          </div>
        </button>
      </div>
      
      {/* Tab Content with Animation */}
      <div className="animate-fade-in">
        <ProjectGrid projects={getFilteredProjects()} />
      </div>
    </div>
  );
};

export default ProjectTabs;
