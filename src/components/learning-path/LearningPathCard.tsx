import React from 'react';
import { LearningPathProps } from '../../types';

// Props interface for LearningPathCard component
interface LearningPathCardProps extends LearningPathProps {
  onClick: () => void;
}

// LearningPathCard component
const LearningPathCard: React.FC<LearningPathCardProps> = ({ id, title, description, created, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden mb-4 cursor-pointer border hover:border-gray-300 transition"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row">
        {/* Placeholder for an image or visual representation */}
        <div className="bg-gray-200 h-48 md:h-auto w-full md:w-[40%] rounded-lg"></div>
        
        {/* Card Content */}
        <div className="p-4 w-full md:w-[60%]">
          {/* Creation Date */}
          <p className="text-xs text-gray-500">Created: {created}</p>
          
          {/* Title */}
          <h2 className="text-xl font-medium mt-2">{title}</h2>
          
          {/* Description */}
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
          
          {/* Divider */}
          <div className="border-b-2 border-gray-200 my-4"></div>
          
          {/* Contents Section */}
          <div>
            <h4 className="text-md font-medium mt-2">Contents</h4>
            <div className="mt-2 flex rounded-md w-[70%] overflow-hidden">
              <div className="bg-red-200 px-8 py-2 pt-14 flex-1 flex justify-center">Modules</div>
              <div className="bg-yellow-200 px-8 py-2 pt-14 flex-1 flex justify-center">Quiz</div>
              <div className="bg-blue-200 px-8 py-2 pt-14 flex-1 flex justify-center">Manuals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;
