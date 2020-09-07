import React, { useEffect, useRef, useState } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const el = useRef();
  useEffect(() => {
    if (el.current) {
      const { current } = el;

      var transition_str = "";
      if (typeof duration !== "number") transition_str += `all 0s `;
      else transition_str += `all ${duration}s `;

      if (typeof delay == "number") transition_str += `cubic-bezier(0, 0, 1, 1) ${delay}s`;
      console.log(transition_str);
      current.style.transition = transition_str;
      current.style.opacity = 1;
    }
    // eslint-disable-next-line
  }, []);
  return { ref: el, style: { opacity: 0 } };
};

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange == "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const fadeInH1 = useFadeIn(3, 0.5);
  const handleNetworkChange = (onLine) => {
    console.log(onLine ? "ONLINE" : "OFFLINE");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <>
      <h1 {...fadeInH1}>Test</h1>
      <p>lorem ipsum</p>
      <div>{onLine ? "onLine" : "offLine"}</div>
    </>
  );
};

export default App;
