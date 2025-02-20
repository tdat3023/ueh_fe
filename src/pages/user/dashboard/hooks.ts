import { RootState } from '@/store';
import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

export const useUserDashboardHooks = () => {
  const {  user } = useAppSelector((state: RootState) => state.userStore);

  const getFullName = useMemo(() => {
    return user?.firstName;
  }, [user]);

  return {
    getFullName,
  };
};
