import { Input, LoadingPage } from '@/components';
import { userModelAddBook } from './hooks';
import { bookTypes, languageTypes } from '@/constants/dataTemplate';
import { IBook } from '@/features/books/interfaces';
import { ArrowLeftIcon } from '@/icons';

interface IProps {
  selectedBook: IBook | null;
  onCancel: () => void;
}

const ModelAddBook = ({ selectedBook, onCancel }: IProps) => {
  const { formik, imageUrls, isLoading, fileInputRef, getTitleName, onDeleteFile, onClickUpload, handleOnchangeFiles } =
    userModelAddBook({
      onCancel,
      selectedBook,
    });
  return (
    <form onSubmit={formik.handleSubmit}>
      {
        isLoading && <LoadingPage />
      }
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
                disabled={selectedBook ? true : false}
                name="ISBN"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ISBN}
                errorMessage={formik.errors.ISBN}
                placeholder="Nhập ISBN..."
                label="ISBN"
              />
            </div>
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                errorMessage={formik.errors.title}
                placeholder="Nhập tên sách..."
                label="Tên sách"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="authName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.authName}
                errorMessage={formik.errors.authName}
                placeholder="Nhập tác giả..."
                label="Tác giả"
              />
            </div>
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="quanlity"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quanlity}
                errorMessage={formik.errors.quanlity}
                placeholder="Nhập số lượng..."
                label="Số lượng"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="language"
                typeElement="select"
                selectData={languageTypes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.language}
                errorMessage={formik.errors.language}
                placeholder="Nhập ngôn ngữ..."
                label="Ngôn ngữ"
              />
            </div>
            <div className="relative flex flex-row items-start justify-center">
              <Input
                name="type"
                typeElement="select"
                selectData={bookTypes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.type}
                errorMessage={formik.errors.type}
                label="Thể loại"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="my-4 flex w-full max-w-md flex-wrap gap-4 overflow-auto">
              {imageUrls &&
                imageUrls.map((url, index) => {
                  return (
                    <div
                      title="Ấn để xoá"
                      key={url}
                      onClick={() => onDeleteFile(index)}
                      className="relative h-32 w-32 cursor-pointer overflow-hidden rounded-xl border border-gray-600"
                    >
                      <div className="hover:shadow-3xl relative flex h-full w-full cursor-pointer flex-col items-start justify-end overflow-auto rounded-xl transition delay-75 duration-300 ease-in-out hover:scale-105">
                        <img className="h-full w-full rounded-xl object-cover" src={url} alt="Clarifi logo" />
                      </div>
                    </div>
                  );
                })}
            </div>
            <input
              onChange={handleOnchangeFiles}
              hidden
              accept="image/*"
              type="file"
              id="files"
              name="files"
              multiple
              ref={fileInputRef}
            />
            <button
              onClick={onClickUpload}
              type="button"
              className="flex h-10 w-40 items-center justify-center gap-2 rounded-lg border-2 border-gray-700 hover:opacity-75 2xl:h-12"
            >
              <p className="text-sm font-semibold text-gray-800">Thêm ảnh</p>
            </button>
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

export default ModelAddBook;
