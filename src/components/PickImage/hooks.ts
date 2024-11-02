import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useCallback, useMemo, useRef, useState } from 'react';

const usePickImageHooks = (onCallBack: () => string) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageUrls = useMemo(() => {
    const images = files.map((file) => URL.createObjectURL(file));
    return [...images];
  }, [files]);

  const onUploadFile = useCallback(async (file: any) => {
    const storage = getStorage();
    const storageRef = ref(storage, `files/${file.name}`);
    const responsive = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(responsive.ref);
    return downloadURL;
  }, []);

  const handleClickUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDeleteFile = useCallback(
    (fileIndex: number) => {
      const data = files.filter((_, index) => index !== fileIndex);
      setFiles(data);
    },
    [files]
  );

  const handleOnchangeFiles = useCallback((e: any) => {
    const fileList = e.target.files;
    if (fileList) {
      setFiles([...fileList]);
    }
  }, []);

  return {
    files,
    imageUrls,
    fileInputRef,
    handleDeleteFile,
    handleClickUpload,
    handleOnchangeFiles,
  };
};

export default usePickImageHooks;
