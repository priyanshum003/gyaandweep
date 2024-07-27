// src/components/LearningPathPage.tsx
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateLearningPath from '../components/learning-path/CreateLearningPath';
import LearningPathCard from '../components/learning-path/LearningPathCard';
import Modal from '../components/Modal';

// Sample data for learning paths
const initialLearningPaths = [
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

const LearningPathPage: FC = () => {
  const [learningPaths, setLearningPaths] = useState(initialLearningPaths);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Function to open modal
  const openModal = () => setModalOpen(true);

  // Function to close modal
  const closeModal = () => setModalOpen(false);

  // Function to handle card click
  const handleCardClick = (pathId: string) => {
    navigate(`/learning-path/${pathId}`);
  };

  const handleCreateLearningPath = () => {
    //  Add logic to create a new learning path
    closeModal();
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium">Learning Paths</h1>
        <button className="bg-gradient-brown text-white px-4 py-2 rounded" onClick={openModal}>
          + Create Learning Path
        </button>
      </div>
      <p className="text-black mb-5 text-sm">
        Use this space to keep track of all learning paths and their modules.
        <br />
        Add modules to learning paths and share with your students. Click + to create a new module.
      </p>
      <div className="border-b-2 border-gray-200 mb-4"></div>
      {learningPaths.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <span className="text-center font-semibold mb-4">No learning paths available. Create one to start.</span>
          <button onClick={openModal} className="btn bg-gradient-brown text-white">Create Learning Path</button>
        </div>
      ) : (
        <div>
          {learningPaths.map((path) => (
            <LearningPathCard
              key={path.id}
              id={path.id}
              title={path.title}
              description={path.description}
              created={path.created}
              onClick={() => handleCardClick(path.id)}
            />
          ))}
        </div>
      )}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <CreateLearningPath onCreate={handleCreateLearningPath} />
      </Modal>
    </div>
  );
};

export default LearningPathPage;
