import { IMember } from '@/features/members/interfaces';
import { getListMembers } from '@/features/members/membersAction';
import { RootState } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useAdminMemberkHooks = () => {
  const dispatch = useAppDispatch();
  const { listMembers, isLoading } = useAppSelector((state: RootState) => state.memberStore);

  const [showModelAddBook, setShowModelAddBook] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<IMember | null>(null);

  const onShowModeAddBook = useCallback(() => {
    setShowModelAddBook(true);
  }, []);

  const onCloseModeAddBook = useCallback(() => {
    setShowModelAddBook(false);
    setSelectedMember(null);
  }, []);

  const onChangeSelectedBook = useCallback((book: IMember | null) => {
    setSelectedMember(book);
  }, []);

  const isShowModel = useMemo(() => {
    return selectedMember != null || showModelAddBook;
  }, [showModelAddBook, selectedMember]);

  useEffect(() => {
    const loadArticles = async () => {
      await dispatch(getListMembers());
    };
    loadArticles();
  }, []);

  return {
    listMembers,
    isLoading,
    isShowModel,
    selectedMember,
    showModelAddBook,
    onShowModeAddBook,
    onCloseModeAddBook,
    onChangeSelectedBook,
  };
};
