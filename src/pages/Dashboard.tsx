import { FC } from 'react';

const Dashboard: FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-8">
        <button className="bg-brown-500 mr-4 rounded px-4 py-2 text-white">
          Create a Gurukul
        </button>
        <button className="bg-beige-500 rounded px-4 py-2 text-black">
          Join a Gurukul
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
