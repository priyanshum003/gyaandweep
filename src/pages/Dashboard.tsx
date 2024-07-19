import { FC } from "react";

const Dashboard: FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="mt-8">
                <button className="bg-brown-500 text-white py-2 px-4 rounded mr-4">Create a Gurukul</button>
                <button className="bg-beige-500 text-black py-2 px-4 rounded">Join a Gurukul</button>
            </div>
        </div>
    );
};

export default Dashboard;
