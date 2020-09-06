import React from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (!callback || typeof callback !== "function" || (rejection && typeof rejection !== "function")) {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const confirmed = () => console.log("btn clicked");
  const cancelled = () => console.log("cancelled");

  const confirmBtn = useConfirm("are you sure", confirmed, cancelled);
  return (
    <>
      <button onClick={confirmBtn}>Click!</button>
    </>
  );
};

export default App;
