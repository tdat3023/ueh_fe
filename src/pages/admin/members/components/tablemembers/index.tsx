import { formatPhoneNumber } from '@/core/utils';
import { IMember } from '@/features/members/interfaces';

interface IHeaderTable {
  id: string;
  name: string;
}
interface IProps {
  headerTable: IHeaderTable[];
  tableData: IMember[];
  onClickRow: (book: IMember) => void;
}

const TableComponent = ({ headerTable, tableData }: IProps) => {
  return (
    <div className="max-h-[64vh] overflow-x-auto rounded-lg border bg-white pt-4 shadow">
      <div className="relative">
        <table className="w-full rounded-sm text-left text-sm">
          <thead className="text-xs uppercase">
            <tr>
              {headerTable.map((item) => {
                return (
                  <th key={item.id} scope="col" className="px-6 py-3">
                    {item.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((book) => {
              return (
                <tr key={book._id} className="border-b bg-white">
                  <th
                    // onClick={() => onClickRow(book)}
                    scope="row"
                    className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium text-gray-900 hover:text-orange-500 hover:underline"
                  >
                    #{book.id}
                  </th>
                  <td className="px-6 py-4 font-DMSans text-sm capitalize">{book.firstName}</td>
                  <td className="px-6 py-4 font-DMSans text-sm">{book.email}</td>
                  <td className="px-6 py-4 font-DMSans text-sm capitalize">{formatPhoneNumber(book.phoneNumber)}</td>
                  <td className="px-6 py-4 font-DMSans text-sm capitalize">{book.classRoom || '-'}</td>
                  {book.active && (
                    <div className="flex items-center gap-1 px-6 py-4">
                      <div className="mt-1 h-[6px] w-[6px] rounded bg-green-500"></div>
                      <td className="">active</td>
                    </div>
                  )}
                  {!book.active && (
                    <div className="flex items-center gap-1 px-6 py-4">
                      <div className="mt-1 h-[6px] w-[6px] rounded bg-red-500"></div>
                      <td className="">disactive</td>
                    </div>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
