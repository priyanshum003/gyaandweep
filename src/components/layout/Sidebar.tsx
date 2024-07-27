import { FC, useState } from 'react';
import { AiOutlineCalendar, AiOutlineHome } from 'react-icons/ai';
import { BsGear, BsQuestionCircle } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { LuLogOut, LuUsers } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { showSuccessToast } from '../../utlis/toastUtils';

// Constants for icon sizes
const MAIN_ICON_SIZE = 20;
const SMALL_ICON_SIZE = 16;

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeachingResources, setShowTeachingResources] = useState(false);
  const [showAssessmentTools, setShowAssessmentTools] = useState(false);
  const location = useLocation();

  // Toggle sidebar open/close state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Logout handler
  const logout = () => {
    showSuccessToast('Logout successful');
    // Additional logout operations can be added here
  };

  // Render navigation links
  const renderNavLinks = (title: string, links: { to: string; icon: JSX.Element; label: string }[]) => (
    <div className={`flex my-2 flex-col ${isOpen ? '' : 'items-center'}`}>
      <div className="px-2 py-2 text-gray-500 text-xs">{title}</div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={`flex items-center px-2 py-2.5 font-medium transition duration-150 hover:bg-active mb-1 ${
            location.pathname === link.to ? 'bg-active' : ''
          }`}
        >
          {link.icon}
          {isOpen && <span className="ml-3 text-sm">{link.label}</span>}
        </Link>
      ))}
    </div>
  );

  // Render collapsible section
  const renderCollapsibleSection = (
    title: string,
    icon: JSX.Element,
    isOpenState: boolean,
    toggleOpenState: () => void,
    subLinks: { to: string; label: string }[]
  ) => (
    <div className="mt-1">
      <button
        onClick={toggleOpenState}
        className="flex w-full items-center justify-between px-2 py-2.5 font-medium transition duration-150 hover:bg-active focus:outline-none"
      >
        <span className="flex items-center">
          {icon}
          {isOpen && <span className="text-sm ml-3">{title}</span>}
        </span>
        {isOpen && (isOpenState ? <IoIosArrowDown size={MAIN_ICON_SIZE} /> : <IoIosArrowForward size={MAIN_ICON_SIZE} />)}
      </button>
      {isOpen && isOpenState && (
        <div className="ml-8 text-sm">
          {subLinks.map((subLink, index) => (
            <Link
              key={index}
              to={subLink.to}
              className={`block px-2 py-1 transition duration-150 hover:bg-active mb-1 ${
                location.pathname === subLink.to ? 'bg-active' : ''
              }`}
            >
              {subLink.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`flex ${isOpen ? 'w-64' : 'w-20'} flex-col justify-between text-black border-r transition-all duration-300 relative`}
    >
      <div className="w-[85%] mx-auto flex flex-col h-full">
        {/* Main Content */}
        <div className="main flex-grow">
          {/* Navigation Links */}
          <nav className={`text-md flex flex-col ${isOpen ? '' : 'items-center'}`}>
            {renderNavLinks('Main', [
              { to: '/', icon: <AiOutlineHome size={MAIN_ICON_SIZE} />, label: 'Home' },
              { to: '/schedule', icon: <AiOutlineCalendar size={MAIN_ICON_SIZE} />, label: 'Schedules' },
            ])}

            {renderNavLinks('Resource', [])}

            {renderCollapsibleSection(
              'Teaching Resources',
              <GoBook size={MAIN_ICON_SIZE} />,
              showTeachingResources,
              () => setShowTeachingResources(!showTeachingResources),
              [
                { to: '/learning-paths', label: 'Learning Path' },
                { to: '/modules', label: 'Modules' },
                { to: '/sadhana', label: 'Sadhana' },
                { to: '/digital-assets', label: 'Digital Assets' },
              ]
            )}

            {renderCollapsibleSection(
              'Assessment Tools',
              <LuUsers size={MAIN_ICON_SIZE} />,
              showAssessmentTools,
              () => setShowAssessmentTools(!showAssessmentTools),
              [
                { to: '/assignments', label: 'Assignments' },
                { to: '/questions', label: 'Questions' },
                { to: '/tests', label: 'Tests' },
              ]
            )}

            {renderNavLinks('Settings', [
              { to: '/settings', icon: <BsGear size={MAIN_ICON_SIZE} />, label: 'Settings' },
            ])}
          </nav>
        </div>

        {/* Bottom Content */}
        <div className="bottom mb-2">
          <nav className={`flex flex-col text-sm font-medium ${isOpen ? '' : 'items-center'}`}>
            <Link to="/help" className="flex items-center px-2 py-2.5 transition duration-150 hover:bg-active">
              <BsQuestionCircle size={SMALL_ICON_SIZE} />
              {isOpen && <span className="ml-3">Help</span>}
            </Link>
            <div className="flex items-center px-2 py-2.5 transition duration-150 text-red-600 hover:bg-active" onClick={logout}>
              <LuLogOut size={SMALL_ICON_SIZE} />
              {isOpen && <span className="ml-3">Logout Account</span>}
            </div>
          </nav>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <div
        onClick={toggleSidebar}
        className="absolute top-4 right-0 transform translate-x-[70%] p-1 bg-white border-gray-300 rounded-full shadow cursor-pointer hover:bg-active"
      >
        <IoIosArrowBack size={20} className={`${isOpen ? '' : 'rotate-180'}`} />
      </div>
    </div>
  );
};

export default Sidebar;