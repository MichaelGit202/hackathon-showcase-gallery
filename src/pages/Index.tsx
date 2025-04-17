
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
    </div>
  );
};

export default Index;
