import usePickImageHooks from './hooks';

interface IProps {
  onCallBack: () => string;
}

const PickImage = ({ onCallBack }: IProps) => {
  const { imageUrls, fileInputRef, handleOnchangeFiles, handleDeleteFile, handleClickUpload } = usePickImageHooks(onCallBack);
  return (
    <div className="flex flex-col">
      <div className="my-4 flex w-full max-w-md flex-wrap gap-4 overflow-auto">
        {imageUrls &&
          imageUrls.map((url, index) => {
            return (
              <div
                title="Ấn để xoá"
                key={url}
                onClick={() => handleDeleteFile(index)}
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
        onClick={handleClickUpload}
        type="button"
        className="flex h-10 w-40 items-center justify-center gap-2 rounded-lg border-2 border-gray-700 hover:opacity-75 2xl:h-12"
      >
        <p className="text-sm font-semibold text-gray-800">Thêm ảnh</p>
      </button>
    </div>
  );
};

export default PickImage;
