import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '@/components/LeftNav';
interface IProps {
  isAllowed?: boolean;
}

const Layout: React.FC<IProps> = ({ isAllowed }) => {
  const hasAuth = true;

  if (!hasAuth) return <React.Fragment></React.Fragment>;

  return (
    <React.Fragment>
      <div className="flex overflow-auto">
        {isAllowed && <LeftNav />}
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
