import React from "react";
import useInput from "./useInput";
import useTabs from "./useTabs";

const contents = [
  {
    header: "Section1",
    body: "This is Section1",
  },
  {
    header: "Section2",
    body: "This is Section2",
  },
];

const App = () => {
  const validator = (value) => value.length <= 10 && value.indexOf(">") < 0 && value.indexOf("<") < 0;
  const myinput = useInput("", validator);

  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <>
      <input placeholder="please type your name" {...myinput} />
      <p>
        {contents.map((content, index) => (
          <button onClick={() => changeItem(index)}>{content.header}</button>
        ))}
      </p>
      <p>{currentItem.body}</p>
    </>
  );
};

export default App;
