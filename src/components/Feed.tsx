import { FC, useState } from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import Modal from './Modal';
import AnnouncementForm from './announcements/AnnouncementForm';

const Feed: FC = () => {
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);

  // Open announcement modal
  const openAnnouncementModal = () => setIsAnnouncementModalOpen(true);
  // Close announcement modal
  const closeAnnouncementModal = () => setIsAnnouncementModalOpen(false);
 
  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex gap-4">
        {/* Gurukul Section - 45% */}
        <div className="flex flex-col items-end justify-between text-white rounded-md bg-[#384C54] flex-1 basis-[45%] p-4 min-h-[300px]">
          <div className="text-xs flex gap-1 items-center justify-center cursor-pointer">
            <MdOutlineModeEditOutline />
            <span>Customize</span>
          </div>
          <div className="w-full flex flex-col gap-1 items-end mb-4">
            <h1 className="text-lg font-semibold">Gurukul Name</h1>
            <div className="w-full border-t border-[#E0E0E0]"></div>
          </div>
        </div>

        {/* Recent Activity Section - 55% */}
        <div className="flex flex-col border flex-1 justify-between basis-[55%] p-4 rounded-md min-h-[200px]">
          <div className="text-sm font-medium">Recent Students Activity</div>
          <div className="text-gray-600 mb-4 text-xs text-center">This is where you review your students' progress</div>
        </div>
      </div>

      <div className="flex py-4 gap-2">
        {/* Class Code Section */}
        <div className="flex flex-col items-start border rounded-md p-2 min-w-[125px] flex-1 basis-1/5 max-w-[100px]">
          <div className="flex items-center justify-between w-full py-2">
            <span className="text-xs">Class Code</span>
            <span className="text-gray-300 cursor-pointer">
              <IoMdMore />
            </span>
          </div>
          <span className="text-brown font-bold py-2 text-lg">K4Qr84</span>
        </div>

        {/* Students Section */}
        <div className="flex flex-col items-start border rounded-md p-2 min-w-[125px] flex-1 basis-1/5 max-w-[100px]">
          <div className="flex items-center justify-between w-full py-2">
            <span className="text-xs">Students</span>
            <span className="text-gray-300 cursor-pointer">
              <IoMdMore />
            </span>
          </div>
          <span className="text-brown font-bold py-2 text-lg">0</span>
        </div>

        {/* Announcement Section */}
        <div className="flex flex-col gap-4 items-start rounded-md pl-2 w-full flex-1 basis-3/5">
          <div className="relative w-full h-full flex items-center">
            <FaUserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-10 h-10" />
            <input
              type="text"
              className="p-2 pl-16 w-full h-full border border-gray-300 rounded"
              placeholder="Announce something to your Gurukul..."
              onClick={openAnnouncementModal}
            />
          </div>
        </div>
      </div>

      {/* Announcement Modal */}
      <Modal isOpen={isAnnouncementModalOpen} onRequestClose={closeAnnouncementModal}>
        <AnnouncementForm />
      </Modal>
    </div>
  );
};

export default Feed;