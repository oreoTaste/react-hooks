/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";

const useClick = (onClick) => {
  const el = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") return;
    el.current.addEventListener("click", onClick);
    return () => {
      el.current.removeEventListener("click", onClick);
    };
  }, []);
  return el;
};

export default useClick;
