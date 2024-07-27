import { FC } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import outlined user
import { FaUserCircle } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const Header: FC = () => {
  return (
    <div className="flex flex-row w-full justify-between p-3 border-b">

      <div className="flex items-center ">
        {/* <span className="mr-3 cursor-pointer">
          <GiHamburgerMenu size={24} />
        </span> */}
        <div className="mr-3 h-10 w-10">
          <img src="https://gyaandweep.com/static/img/logo_final.png" alt="Gyaandweep" />
        </div>
        <h1 className="text-2xl font-medium">Gyaandweep</h1>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <span className="cursor-pointer">
            <MdAdd size={30} />
          </span>
          <span className="mr-3 cursor-pointer">
            <FaUserCircle size={30} />
          </span>
        </div>

      </div>

    </div>
  );
};

export default Header;
