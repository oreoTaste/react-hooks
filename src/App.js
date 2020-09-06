import React from "react";

const useConfirm = (msg = "", callback, reject) => {
  const myconfirm = () => {
    if (window.confirm(msg)) {
      if (typeof callback === "function") {
        callback();
      }
    } else {
      if (typeof reject === "function") {
        reject();
      }
    }
  };
  return myconfirm;
};

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enableProtect = () => window.addEventListener("beforeunload", listener);
  const disableProtect = () => window.removeEventListener("beforeunload", listener);
  return { enableProtect, disableProtect };
};

const App = () => {
  const opt1 = () => (document.querySelector(".mychoice").innerHTML = "You chose to DELETE world");
  const opt2 = () => (document.querySelector(".mychoice").innerHTML = "You chose to PROTECT world");
  const check = useConfirm("Are you sure?", opt1, opt2);

  const { enableProtect, disableProtect } = usePreventLeave();
  return (
    <>
      <button onClick={check}>Delete world!</button>
      <p>
        <button onClick={enableProtect}>Protect from sudden close</button>
        <button onClick={disableProtect}>UnProtect from sudden close</button>
      </p>
      <div className="mychoice"></div>
    </>
  );
};

export default App;
