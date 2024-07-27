import { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

// Define the types for the Modal component props
interface ModalProps {
  isOpen: boolean; // Boolean to control if the modal is open
  onRequestClose: () => void; // Function to close the modal
  children: ReactNode; // Content to be displayed inside the modal
  title?: string; // Optional title for the modal
}

// Functional component definition
const Modal: FC<ModalProps> = ({ isOpen, onRequestClose, children, title }) => {
  return (
    <ReactModal
      isOpen={isOpen} // Controls if the modal is open
      onRequestClose={onRequestClose} // Handler to close the modal
      className="fixed inset-0 flex items-center justify-center z-50" // Styling for the modal container
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40" // Styling for the modal overlay
      ariaHideApp={false} // Set to false to prevent ARIA hidden state on the app
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-2 relative">
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>} {/* Conditional rendering of the title */}
        <button
          onClick={onRequestClose} // Close button handler
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" // Styling for the close button
        >
          <FaTimes size={20} /> {/* Close icon */}
        </button>
        <div>{children}</div> {/* Display the children content */}
      </div>
    </ReactModal>
  );
};

export default Modal;