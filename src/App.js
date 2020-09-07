import React from "react";
import useFadeIn from "./useFadeIn";
import useNetwork from "./useNetwork";

const App = () => {
  const fadeIn = useFadeIn(2, 0.5);
  const current_status = useNetwork((status) => {
    status ? console.log("online") : console.log("offline");
  });
  return (
    <>
      <h1 ref={fadeIn} {...fadeIn}>
        Test
      </h1>
      <p>lorem ipsum</p>
      <div>{current_status ? "ONLINE" : "OFFLINE"}</div>
    </>
  );
};

export default App;
