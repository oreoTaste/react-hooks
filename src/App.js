import React, { useRef, useEffect } from "react";

const useClick = (onClick) => {
  const el = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (el.current) {
      el.current.addEventListener("click", onClick);
    }
    return (el) => {
      if (el.current) {
        el.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return el;
};

const App = () => {
  const div = useClick(() => {
    console.log(div.current);
  });

  return (
    <>
      <div ref={div}>Hello</div>
    </>
  );
};

export default App;
