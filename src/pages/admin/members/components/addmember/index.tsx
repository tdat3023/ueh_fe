import { Input, LoadingPage } from '@/components';
import { userModelAddBook } from './hooks';
import { ArrowLeftIcon } from '@/icons';
import { IMember } from '@/features/members/interfaces';

interface IProps {
  selectedMember: IMember | null;
  onCancel: () => void;
}

const ModelAddMember = ({ selectedMember, onCancel }: IProps) => {
  const { formik, isLoading, getTitleName } = userModelAddBook({
    onCancel,
    selectedMember,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {isLoading && <LoadingPage />}
      <div className="space-y-12">
        <div className="pb-12">
          <div className="mb-6 flex items-center gap-2">
            <span className="rotate-180 cursor-pointer" onClick={onCancel}>
              <ArrowLeftIcon />
            </span>
            <h2 className="text-lg font-semibold leading-7 text-gray-900">{getTitleName()}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative flex flex-row items-start justify-center">
              <Input
                disabled={selectedMember ? true : false}
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                errorMessage={formik.errors.firstName}
                placeholder="Nhập tên..."
                label="Họ tên"
              />
            </div>
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                errorMessage={formik.errors.email}
                placeholder="Nhập email..."
                label="Email"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="phoneNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                errorMessage={formik.errors.phoneNumber}
                placeholder="Nhập số điện thoại..."
                label="Số điện thoại"
              />
            </div>
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="classRoom"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.classRoom}
                errorMessage={formik.errors.classRoom}
                placeholder="Nhập lớp..."
                label="Lớp học"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={onCancel} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Hủy
        </button>
        <button
          onClick={formik.handleSubmit}
          className="rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          Lưu
        </button>
      </div>
    </form>
  );
};

export default ModelAddMember;
