import { REQUIRED_FIELD } from '@/constants';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { IMember } from '@/features/members/interfaces';
import { useAppDispatch } from '@/store/hooks';
import { creatMember, getListMembers } from '@/features/members/membersAction';

interface IProps {
  selectedMember: IMember | null;
  onCancel: () => void;
}

export const userModelAddBook = ({ onCancel, selectedMember }: IProps) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    firstName: selectedMember?.firstName || '',
    lastName: selectedMember?.lastName || '',
    email: selectedMember?.email || '',
    phoneNumber: selectedMember?.phoneNumber || '',
    classRoom: selectedMember?.classRoom || '',
  };

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        await dispatch(creatMember({ ...data, password: '12345Ueh@CCCD' }));
        await dispatch(getListMembers());
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
    [onCancel]
  );

  const formik: any = useFormik({
    initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string().trim().required(REQUIRED_FIELD),
      email: Yup.string().required(REQUIRED_FIELD).email('Email không hợp lệ'),
      classRoom: Yup.string().trim().required(REQUIRED_FIELD),
      phoneNumber: Yup.string()
        .required('Số điện thoại là bắt buộc')
        .matches(/^([+]\d{2})?\d{10}$/, 'Số điện thoại không hợp lệ'),
    }),
    onSubmit,
    validateOnMount: false,
  });

  const getTitleName = useCallback(() => {
    return selectedMember ? 'Thêm Thành Viên' : 'Cập nhật Thành Viên'
  }, []);

  return {
    formik,
    isLoading,
    initialValues,
    getTitleName,
  };
};
