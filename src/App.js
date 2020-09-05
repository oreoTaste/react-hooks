import React, { useEffect, useState } from "react";

const App = () => {
  const DidMount = () => {
    console.log("Component Did Mount!");
  };
  useEffect(DidMount, []);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <>
      <div>Hello</div>
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        {num1}
      </button>
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        {num2}
      </button>
    </>
  );
};

export default App;
