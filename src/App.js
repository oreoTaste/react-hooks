import React from "react";
import useFadeIn from "./useFadeIn";

const App = () => {
  const fadeIn = useFadeIn(3, 0.5);
  return (
    <>
      <h1 ref={fadeIn} {...fadeIn}>
        Test
      </h1>
      <p>lorem ipsum</p>
      <div>online0.</div>
    </>
  );
};

export default App;
