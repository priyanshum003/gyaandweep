import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header component at the top */}
      <Header />
      
      {/* Main content area with Sidebar and Outlet */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar component */}
        <Sidebar />
        
        {/* Main content area where nested routes will be rendered */}
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;