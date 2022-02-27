import React from 'react';
import HighlightedProjectSection from '../components/HighlightedProjectSection';
import ProjectsListBanner from '../components/ProjectsListBanner';

export default function Home() { 
    return (
      <div>
        <HighlightedProjectSection />
        <ProjectsListBanner />
      </div>
    );
  }