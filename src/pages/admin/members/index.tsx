import React from 'react';
import Header from '@/components/Header';
import TableComponent from './components/tablemembers';
import { headerMemberTable } from '@/constants/dataTemplate';
import { useAdminMemberkHooks } from './hooks';
import ModelAddMember from './components/addmember';

const MemberPage: React.FC = () => {
  const { listMembers, isShowModel, selectedMember, onChangeSelectedBook, onShowModeAddBook, onCloseModeAddBook } =
    useAdminMemberkHooks();

  return (
    <div className="relative flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={true} />
      <div className="h-full max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        {isShowModel ? (
          <ModelAddMember selectedMember={selectedMember} onCancel={() => onCloseModeAddBook()} />
        ) : (
          <React.Fragment>
            <div className="my-4 flex items-center justify-between">
              <p className="text-xl font-bold">Danh sách Sinh Viên</p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onShowModeAddBook()}
                  className="rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  Tạo Mới
                </button>
              </div>
            </div>
            <TableComponent
              onClickRow={(member) => onChangeSelectedBook(member)}
              tableData={listMembers.items}
              headerTable={headerMemberTable}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default MemberPage;
