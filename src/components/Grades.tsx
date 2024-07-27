// src/components/LearningPath.tsx
import { FC, useState } from 'react';
import Modal from './Modal';

// Define the Grades component
const Grades: FC = () => {
  // State to control the visibility of the modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setModalOpen(true);

  // Function to close the modal
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col h-full p-6 justify-center items-center">
      <div className="container max-w-sm flex justify-center items-center flex-col">
        {/* Instructional text */}
        <span className="text-center font-semibold">
          Create assignment to see grades
        </span>
        {/* Button to open the modal */}
        <div className="flex justify-center p-2 mt-5">
          <button onClick={openModal} className="btn bg-gradient-brown text-white">
            + Create Assignment
          </button>
        </div>
      </div>

      {/* Modal component for assignment creation */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        {/* Form inside the modal to create an assignment */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Assignment</h2>
          </div>
          <div className="mb-4">
            {/* Input fields for assignment details */}
            <label className="flex items-center mb-2">
              <input type="text" className="form-input mr-2" placeholder="Title" />
            </label>
            <label className="flex items-center mb-2">
              <input type="text" className="form-input mr-2" placeholder="Description" />
            </label>
            <label className="flex items-center mb-2">
              <input type="text" className="form-input mr-2" placeholder="Due Date" />
            </label>
          </div>
          {/* Button to submit the assignment */}
          <button className="bg-brown text-white py-2 px-4 rounded">Create</button>
        </div>
      </Modal>
    </div>
  );
};

export default Grades;
