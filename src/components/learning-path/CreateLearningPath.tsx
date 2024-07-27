import { FC, useState } from 'react';

// Props interface for CreateLearningPath component
interface CreateLearningPathProps {
  onCreate: (newPath: LearningPathProps) => void;
}

// Define LearningPathProps interface
interface LearningPathProps {
  id: string;
  title: string;
  description: string;
  created: string;
}

// CreateLearningPath component
const CreateLearningPath: FC<CreateLearningPathProps> = ({ onCreate }) => {
  // State for title, description, and creation date
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // eslint-disable-next-
  const [created, setCreated] = useState(new Date().toLocaleDateString());

  // Handle form submission
  const handleSubmit = () => {
    // Generate a unique ID and create a new learning path object
    const newPath: LearningPathProps = {
      id: Date.now().toString(),
      title,
      description,
      created,
    };

    // Invoke the onCreate callback with the new learning path
    onCreate(newPath);

    // Reset form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Create Learning Path</h2>
      </div>
      <div className="mb-4">
        {/* Title Input */}
        <label className="flex items-center mb-2">
          <input
            type="text"
            className="form-input mr-2 p-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {/* Description Input */}
        <label className="flex items-center mb-2">
          <input
            type="text"
            className="form-input mr-2 p-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      {/* Submit Button */}
      <button onClick={handleSubmit} className="bg-gradient-brown text-white py-2 px-4 rounded">
        Create
      </button>
    </div>
  );
};

export default CreateLearningPath;
