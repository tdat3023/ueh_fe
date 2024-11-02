import React from 'react';
import Header from '@/components/Header';
import { useAdminDashboardHooks } from './hooks';

const AdminDashboard: React.FC = () => {
  const { getFullName } = useAdminDashboardHooks();
  return (
    <div className="relative flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={true} />
      <div className="h-full max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="flex w-full flex-col items-start justify-start md:flex-row">
          <div className="flex flex-col">
            <h1 className="font-SpaceGrotesk mb-2 text-2xl font-semibold capitalize text-blackLight">
              Hi {getFullName},
            </h1>
            <p className="font-SpaceGrotesk text-sm font-normal text-grayLight">Chào mừng trở lại Hệ Thống EUH!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
