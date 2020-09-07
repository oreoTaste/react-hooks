import React from "react";
import useInput from "./useInput";
import useTabs from "./useTabs";
import useTitle from "./useTitle";
import useClick from "./useClick";
import useConfirm from "./useConfirm";
import usePreventLeave from "./usePreventLeave";
import useBeforeLeave from "./useBeforeLeave";

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

  const trig_confirm = useConfirm(
    "are you sure?",
    () => console.log("the world is deleted"),
    () => console.log("the world is protected")
  );

  const { enablePrevent, disablePrevent } = usePreventLeave();
  useBeforeLeave(() => console.log("don't leave"));
  setTimeout(() => titleUpdator("Loaded"), 500);
  return (
    <>
      <p>
        <button onClick={enablePrevent}>창닫기전 확인!</button>
        <button onClick={disablePrevent}>창닫기전 확인안함!</button>
      </p>
      <button onClick={trig_confirm}>confirmation test</button>
      <p>
        <button ref={showDate}>Now Button</button>
        <span className="current_time"></span>
      </p>
      <input placeholder="please type your name" {...myinput} />
      <p>
        {contents.map((content, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {content.header}
          </button>
        ))}
      </p>
      <p>{currentItem.body}</p>
    </>
  );
};

export default App;
