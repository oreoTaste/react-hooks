import { useRef, useEffect } from "react";

const useFadeIn = (time = 0, delay = 0) => {
  const el = useRef();
  useEffect(() => {
    var fade_str = "";
    if (typeof time !== "number") fade_str += `all 0s`;
    else fade_str += `all ${time}s`;
    if (typeof delay !== "number") fade_str += ` cubic-bezier(0,0,1,1) 0s`;
    else fade_str += ` cubic-bezier(0,0,1,1) ${delay}s`;
    el.current.style.opacity = 1;
    el.current.style.transition = fade_str;
  }, [time, delay]);

  return { ref: el, style: { opacity: 0 } };
};

export default useFadeIn;
