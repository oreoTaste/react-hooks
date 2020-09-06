import React from "react";
import useInput from "./useInput";

const App = () => {
  const validator = (value) => value.length <= 10 && value.indexOf(">") < 0 && value.indexOf("<") < 0;
  const myinput = useInput("", validator);

  return (
    <>
      <input placeholder="please type your name" {...myinput} />
    </>
  );
};

export default App;
