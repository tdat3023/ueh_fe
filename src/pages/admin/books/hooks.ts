import { getListBooks } from '@/features/books/bookActions';
import { IBook } from '@/features/books/interfaces';
import { RootState } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useAdminBookHooks = () => {
  const dispatch = useAppDispatch();
  const { listBooks, isLoading } = useAppSelector((state: RootState) => state.bookStore);

  const [showModelAddBook, setShowModelAddBook] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);

  const onShowModeAddBook = useCallback(() => {
    setShowModelAddBook(true);
  }, []);

  const onCloseModeAddBook = useCallback(() => {
    setShowModelAddBook(false);
    setSelectedBook(null);
  }, []);

  const onChangeSelectedBook = useCallback((book: IBook | null) => {
    setSelectedBook(book);
  }, []);

  const isShowModel = useMemo(() => {
    return selectedBook != null || showModelAddBook;
  }, [showModelAddBook, selectedBook]);

  useEffect(() => {
    const loadArticles = async () => {
      await dispatch(getListBooks());
    };
    loadArticles();
  }, []);

  return {
    listBooks,
    isLoading,
    isShowModel,
    selectedBook,
    showModelAddBook,
    onShowModeAddBook,
    onCloseModeAddBook,
    onChangeSelectedBook,
  };
};
