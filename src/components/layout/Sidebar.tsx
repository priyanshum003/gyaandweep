import { FC, useState } from 'react';
import { AiOutlineCalendar, AiOutlineHome } from 'react-icons/ai';
import { BsBoxArrowRight, BsGear, BsQuestionCircle } from 'react-icons/bs';
import { FiBook } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { LuUsers } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const mainIconSize = 20; // 20px width and height
const mIconSize = 16; // 16px width and height

const Sidebar: FC = () => {
  const [showTeachingResources, setShowTeachingResources] = useState(true);
  const [showAssessmentTools, setShowAssessmentTools] = useState(true);

  return (
    <div className="w-72 bg-[#F6F6F6] text-black h-screen drop-shadow-lg flex flex-col justify-between">
      {/* Main Content */}
      <div className="main">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center justify-between">
            <span className="mr-3 cursor-pointer">
              <GiHamburgerMenu size={24} />
            </span>
            <div className="w-7 h-7 mr-3">
              {/* logo space */}
              <span className="w-full h-full bg-gray-300 block"></span>
            </div>
            <h1 className="text-2xl font-medium">Gyaandweep</h1>
            {/* bottom line */}
          </div>
        </div>
        <div className="w-[90%] h-[1px] bg-gray-400 mt-2 mx-auto drop-shadow-sm"></div>
        <nav className="mt-4 text-md flex flex-col gap-2">
          <Link
            to="/"
            className="flex items-center py-2.5 px-4 hover:bg-gray-200 transition duration-150 font-medium"
          >
            <AiOutlineHome size={mainIconSize} />{' '}
            <span className="ml-3">Home</span>
          </Link>
          <Link
            to="/schedule"
            className="flex items-center py-2.5 px-4 hover:bg-gray-200 transition duration-150 font-medium"
          >
            <AiOutlineCalendar size={mainIconSize} />{' '}
            <span className="ml-3">Schedule</span>
          </Link>
          <div>
            <button
              onClick={() => setShowTeachingResources(!showTeachingResources)}
              className="flex items-center justify-between w-full py-2.5 px-4 hover:bg-gray-200 transition duration-150 focus:outline-none font-medium"
            >
              <span className="flex items-center">
                <FiBook size={mainIconSize} />{' '}
                <span className="ml-3">Teaching Resources</span>
              </span>
              {showTeachingResources ? (
                <IoIosArrowDown size={mainIconSize} />
              ) : (
                <IoIosArrowForward size={mainIconSize} />
              )}
            </button>
            {showTeachingResources && (
              <div className="ml-8 text-sm">
                <Link
                  to="/learning-paths"
                  className="block py-1 px-4 hover:bg-gray-200 transition duration-150"
                >
                  Learning Paths
                </Link>
                <Link
                  to="/modules"
                  className="block py-1 px-4 hover:bg-gray-200 transition duration-150"
                >
                  Modules
                </Link>
                <Link
                  to="/sadhana"
                  className="block py-1 px-4 hover:bg-gray-200 transition duration-150"
                >
                  Sadhana
                </Link>
                <Link
                  to="/digital-assets"
                  className="block py-1 px-4 hover:bg-gray-200 transition duration-150"
                >
                  Digital Assets
                </Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setShowAssessmentTools(!showAssessmentTools)}
              className="flex items-center justify-between w-full py-2.5 px-4 hover:bg-gray-200 transition duration-150 focus:outline-none font-medium"
            >
              <span className="flex items-center">
                <LuUsers size={mainIconSize} />{' '}
                <span className="ml-3">Assessment Tools</span>
              </span>
              {showAssessmentTools ? (
                <IoIosArrowDown size={mainIconSize} />
              ) : (
                <IoIosArrowForward size={mainIconSize} />
              )}
            </button>
            {showAssessmentTools && (
              <div className="ml-8 text-sm">
                <Link
                  to="/assignments"
                  className="block py-1 px-4 hover:bg-gray-200 transition duration-150"
                >
                  Assignments
                </Link>
                <Link
                  to="/questions"
                  className="block py-1 px-4 hover:bg-gray-200 transition duration-150"
                >
                  Questions
                </Link>
                <Link
                  to="/tests"
                  className="block py-1 px-4 hover:bg-gray-200 transition duration-150"
                >
                  Tests
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/settings"
            className="flex items-center py-2.5 px-4 hover:bg-gray-200 transition duration-150 font-medium"
          >
            <BsGear size={mainIconSize} />{' '}
            <span className="ml-3">Settings</span>
          </Link>
        </nav>
      </div>

      {/* Bottom Content */}
      <div className="bottom">
        <nav className="font-medium flex-col text-sm ">
          <Link
            to="/help"
            className="flex items-center py-2.5 px-4 hover:bg-gray-200 transition duration-150"
          >
            <BsQuestionCircle size={mIconSize} />{' '}
            <span className="ml-3">Help</span>
          </Link>
          <Link
            to="/logout"
            className="flex items-center py-2.5 px-4 hover:bg-gray-200 transition duration-150"
          >
            <BsBoxArrowRight size={mIconSize} />{' '}
            <span className="ml-3">Log out</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
