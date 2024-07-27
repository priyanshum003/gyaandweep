import React, { useState } from 'react';

// Components
import Feed from '../components/Feed';
import Grades from '../components/Grades';
import LearningPath from '../pages/LearningPath';
import Students from '../components/Students';

// CSS class for active tab
const activeClasses = 'mr-4 text-brown border-b-[4px] border-brown';

// Schedule component
const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('feed'); // State to manage active tab

  return (
    <div>
      {/* Navigation bar for tabs */}
      <nav className="flex p-4 pt-0 text-black font-medium border-b text-lg">
        <button
          onClick={() => setActiveTab('feed')}
          className={activeTab === 'feed' ? activeClasses : 'mr-4'}
        >
          Feed
        </button>
        <button
          onClick={() => setActiveTab('learning-path')}
          className={activeTab === 'learning-path' ? activeClasses : 'mr-4'}
        >
          Learning Path
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={activeTab === 'students' ? activeClasses : 'mr-4'}
        >
          Students
        </button>
        <button
          onClick={() => setActiveTab('grades')}
          className={activeTab === 'grades' ? activeClasses : 'mr-4'}
        >
          Grades
        </button>
      </nav>

      {/* Render content based on active tab */}
      <div className="p-4">
        {activeTab === 'feed' && <Feed />}
        {activeTab === 'learning-path' && <LearningPath />}
        {activeTab === 'students' && <Students />}
        {activeTab === 'grades' && <Grades />}
      </div>
    </div>
  );
};

export default Schedule;
