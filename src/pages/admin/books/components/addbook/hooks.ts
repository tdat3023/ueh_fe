import { REQUIRED_FIELD } from '@/constants';
import { creatBook, getListBooks, updateBook } from '@/features/books/bookActions';
import { useAppDispatch } from '@/store/hooks';
import { useFormik } from 'formik';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { storage } from '@/config/firebase.config';
import { IBook } from '@/features/books/interfaces';

interface IProps {
  selectedBook: IBook | null;
  onCancel: () => void;
}

export const userModelAddBook = ({ onCancel, selectedBook }: IProps) => {
  const dispatch = useAppDispatch();

  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    ISBN: selectedBook?.ISBN || '',
    title: selectedBook?.title || '',
    authName: selectedBook?.authName || '',
    type: selectedBook?.type || '',
    quanlity: selectedBook?.quanlity || 0,
    language: selectedBook?.language || '',
    image: selectedBook?.image || '',
  };

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        let dataParams = {
          ...data,
        };
        if (files.length > 0) {
          const imageUrl = await onUploadFile(files[0]);
          dataParams = {
            ...data,
            image: imageUrl,
          };
        }
        if (selectedBook) {
          await dispatch(updateBook({ ...dataParams, _id: selectedBook._id }));
        } else {
          await dispatch(creatBook(dataParams));
        }
        await dispatch(getListBooks());
        onCancel();
      } catch (error) {
        console.error(error);
        toast('Đã có lỗi xảy ra, Vui lòng thử lại sau!', {
          type: 'error',
          position: 'bottom-center',
          theme: 'light',
          autoClose: 500,
          hideProgressBar: true,
          closeButton: false,
          bodyClassName: 'toast-body',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [onCancel, files]
  );

  const formik: any = useFormik({
    initialValues,
    validationSchema: Yup.object({
      ISBN: Yup.string().trim().required(REQUIRED_FIELD),
      title: Yup.string().trim().required(REQUIRED_FIELD),
      authName: Yup.string().trim().required(REQUIRED_FIELD),
      type: Yup.string().trim().required(REQUIRED_FIELD),
      language: Yup.string().trim().required(REQUIRED_FIELD),
      quanlity: Yup.number()
        .typeError('Giá trị phải là một số')
        .required('Trường này là bắt buộc')
        .positive('Giá trị phải là số dương')
        .integer('Giá trị phải là số nguyên'),
    }),
    onSubmit,
    validateOnMount: false,
  });

  const getTitleName = useCallback(() => {
    return selectedBook ? 'Cập nhật Sách' : 'Tạo mới Sách';
  }, [selectedBook]);

  useEffect(() => {
    const images = files.map((file) => URL.createObjectURL(file));
    const list = images.length > 0 ? images : selectedBook?.image ? [selectedBook?.image] : [];
    setImageUrls(list);
  }, [files, selectedBook]);

  const onUploadFile = useCallback(async (file: any) => {
    const storageRef = ref(storage, `files/${file.name}`);
    const responsive = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(responsive.ref);
    return downloadURL;
  }, []);

  const onClickUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onDeleteFile = useCallback(
    (fileIndex: number) => {
      if (files.length > 0) {
        const data = files.filter((_, index) => index !== fileIndex);
        setFiles(data);
      } else {
        formik?.setFieldValue('image', '');
        setImageUrls([]);
      }
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
    formik,
    imageUrls,
    isLoading,
    fileInputRef,
    initialValues,
    getTitleName,
    onUploadFile,
    onDeleteFile,
    onClickUpload,
    handleOnchangeFiles,
  };
};
