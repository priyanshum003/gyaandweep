// src/components/AnnouncementForm.tsx
import { FC } from 'react';
import { FaBold, FaItalic, FaUnderline, FaListUl } from 'react-icons/fa';
import { IoCaretDown } from "react-icons/io5";

const AnnouncementForm: FC = () => {
    return (
        <div>
            <label className="block text-lg font-medium mb-2">For</label>
            <div className="flex gap-4 mb-4">
                <select className="border border-gray-300 rounded p-2 flex-1">
                    <option>Gurukul Name</option>
                </select>
                <select className="border border-gray-300 rounded p-2 flex-1">
                    <option>Students</option>
                </select>
            </div>
            <div className="border border-gray-300 rounded mb-4 p-2">
                <textarea
                    className="p-2 w-full border-none outline-none"
                    placeholder="Type your announcement here..."
                    rows={4}
                ></textarea>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-2">
                        <button className="p-2 bg-gray-200 rounded text-gray-700">
                            <FaBold />
                        </button>
                        <button className="p-2 bg-gray-200 rounded text-gray-700 italic">
                            <FaItalic />
                        </button>
                        <button className="p-2 bg-gray-200 rounded text-gray-700 underline">
                            <FaUnderline />
                        </button>
                        <button className="p-2 bg-gray-200 rounded text-gray-700">
                            <FaListUl />
                        </button>
                    </div>
                    <button className="bg-brown text-white p-2 rounded flex items-center">
                        Post
                        <span className="ml-1">
                        <IoCaretDown />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementForm;