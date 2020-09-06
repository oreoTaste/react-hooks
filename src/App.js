import React from "react";

const useConfirm = (msg = "", callback, reject) => {
  const myconfirm = () => {
    if (window.confirm(msg)) {
      if (typeof callback === "function") callback();
    } else {
      if (typeof reject === "function") reject();
    }
  };
  return myconfirm;
};

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const callback = () => console.log("confirmed");
  const reject = () => console.log("rejected");
  const deleteWorld = useConfirm("are you sure?", callback, reject);
  return (
    <>
      <button onClick={enablePrevent}>Protect!</button>
      <button onClick={disablePrevent}>UnProtect!</button>
      <button onClick={deleteWorld}>check!</button>
    </>
  );
};

export default App;
