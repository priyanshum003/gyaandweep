import { FC } from 'react';
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from "react-icons/hi2";
import { useParams } from 'react-router-dom';

// Sample data for learning paths
const learningPaths = [
  {
    id: '1',
    title: "Learning Path Name 1",
    description: "Lorem ipsum dolor sit amet consectetur. Amet nisl dictum eu vulputat aliquet faucibus.",
    created: "July 9, 2024"
  },
  {
    id: '2',
    title: "Learning Path Name 2",
    description: "Lorem ipsum dolor sit amet consectetur. Amet nisl dictum eu vulputat aliquet faucibus.",
    created: "July 9, 2024"
  },
];

// LearningPathDetail component
const LearningPathDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const learningPath = learningPaths.find(path => path.id === id);

  if (!learningPath) {
    return <div>Learning Path not found</div>;
  }

  const { title, description, created } = learningPath;

  return (
    <div className="bg-white rounded-lg overflow-hidden px-2">
      {/* Header section */}
      <div className="flex flex-col md:flex-row mb-10 rounded-lg overflow-hidden">
        <div className="bg-gray-200 w-full md:w-1/3 h-48 md:h-auto"></div>
        <div className="p-6 w-full md:w-2/3 border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs text-gray-500">Created: {created}</p>
              <h1 className="text-2xl font-medium mt-2">{title}</h1>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded">Preview</button>
              <button className="px-4 py-2 border rounded">Draft</button>
              <button className="px-4 py-2 bg-gradient-brown text-white rounded">Assign</button>
            </div>
          </div>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <div className="border-b-2 border-gray-200 my-4"></div>
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
      
      {/* Content section */}
      <div className="border border-gray-200">
        <div className="flex justify-end p-4 border-gray-200 rounded-lg overflow-hidden">
          <button className="px-4 py-2 border rounded mr-2">Edit</button>
          <button className="p-2 border rounded">
            <HiMagnifyingGlassMinus className="h-6 w-6" />
          </button>
        </div>
        <div className="h-64 relative">
          {/* Placeholder for content area */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 border rounded-lg">
            <div className="p-2 rounded-full">
              <HiMagnifyingGlassMinus />
            </div>
            <span className="text-sm">100</span>
            <div className="p-2 rounded-full">
              <HiMagnifyingGlassPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetail;
