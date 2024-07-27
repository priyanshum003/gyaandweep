import { FC, useState } from 'react';
import Modal from '../components/Modal';

const Home: FC = () => {
  // const [open, setOpen] = useState(false);
  const [isAddGurukulModalOpen, setAddGurukulModalOpen] = useState(false);
  const [isJoinGurukulModalOpen, setJoinGurukulModalOpen] = useState(false);

  const closeAddGurukulModal = () => setAddGurukulModalOpen(false);

  const closeJoinGurukulModal = () => setJoinGurukulModalOpen(false);



  return (
    <div className="flex flex-col h-full p-6 justify-center items-center">

      <div className='container max-w-sm '>
        {/* Add a gurukul */}
        <div className='w-full h-[300px] bg-gray-200 flex items-end justify-center p-5'>
          <span className='text-center font-semibold'>
            Add a Gurukul to get started
          </span>
        </div>
        {/* btns div - 2 btns */}
        <div className='flex justify-between p-2 mt-5'>
          <button className='btn bg-gradient-brown text-white' onClick={() => setAddGurukulModalOpen(true)}>
            Create a Gurukul
          </button>
          <button className='btn bg-paleSand text-[#D29365]' onClick={() => setJoinGurukulModalOpen(true)}>
            Join a Gurukul
          </button>
        </div>
      </div>


      {/* Updated Code */}
      <Modal isOpen={isAddGurukulModalOpen} onRequestClose={closeAddGurukulModal}>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-semibold mb-5'>Create a Gurukul</h1>
          <input
            type='text'
            placeholder='Enter Gurukul Name'
            className='input'
          />
          <button className='btn bg-gradient-brown text-white mt-5'>
            Create Gurukul
          </button>
        </div>
      </Modal>

      <Modal isOpen={isJoinGurukulModalOpen} onRequestClose={closeJoinGurukulModal}>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-semibold mb-5'>Join a Gurukul</h1>
          <input
            type='text'
            placeholder='Enter Gurukul Code'
            className='input'
          />
          <button className='btn bg-gradient-brown text-white mt-5'>
            Join Gurukul
          </button>
        </div>
      </Modal>

    </div >
  );
};

export default Home;
