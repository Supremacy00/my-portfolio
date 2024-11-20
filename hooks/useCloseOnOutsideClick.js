import { useEffect } from "react";

const useCloseOnOutsideClick = (isActive, closeHandler, ...refs) => {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event) => {
      if (
        refs.every((ref) => ref.current && !ref.current.contains(event.target))
      ) {
        closeHandler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive, closeHandler, refs]);
};

export default useCloseOnOutsideClick;
