import { bookTypes, languageTypes } from '@/constants/dataTemplate';
import { useCallback } from 'react';

export const useTableBookHooks = () => {
  const getBookTypeName = useCallback((typeId: string) => {
    const type = bookTypes.find((item) => item.id == typeId);
    return type?.label ?? '_';
  }, []);

  const getLanguageName = useCallback((id: string) => {
    const type = languageTypes.find((item) => item.id == id);
    return type?.label ?? '_';
  }, []);

  return {
    getBookTypeName,
    getLanguageName,
  };
};
