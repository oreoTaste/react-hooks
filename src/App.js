import React from "react";
import useInput from "./useInput";
import useTabs from "./useTabs";
import useTitle from "./useTitle";
import useClick from "./useClick";

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
  const titleUpdator = useTitle("Loading...");

  const validator = (value) => value.length <= 10 && value.indexOf(">") < 0 && value.indexOf("<") < 0;
  const myinput = useInput("", validator);

  const { currentItem, changeItem } = useTabs(0, contents);
  const showDate_func = () => {
    document.querySelector(".current_time").innerHTML = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  };
  const showDate = useClick(showDate_func);

  setTimeout(() => titleUpdator("Loaded"), 500);
  return (
    <>
      <p>
        <button ref={showDate}>Now Button</button>
        <span className="current_time"></span>
      </p>
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
