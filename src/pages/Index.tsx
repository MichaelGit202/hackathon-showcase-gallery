
import React from 'react';
import HackathonHeader from '../components/HackathonHeader';
import GroupPhoto from '../components/GroupPhoto';
import ProjectTabs from '../components/ProjectTabs';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto">
        <HackathonHeader />
        <GroupPhoto />
        <ProjectTabs />
      </div>
      
      <footer className="text-center text-gray-400 text-sm mt-16">
        <p>© 2025 TechInnovate Hackathon. All projects showcased with permission.</p>
      </footer>
    </div>
  );
};

export default Index;
