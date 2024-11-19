
import { useEffect } from 'react';

const useCloseOnOutsideClick = (isActive, closeCallback, ...refs) => {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isActive && refs.every((ref) => ref.current && !ref.current.contains(e.target))) {
        closeCallback();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isActive, closeCallback, refs]);
};

export default useCloseOnOutsideClick;
