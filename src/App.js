import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  // setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <>
      <input placeholder="Please put a title" />
      <button
        onClick={() => {
          const inputValue = document.querySelector("input").value;
          titleUpdater(inputValue);
        }}
      >
        이름 바꾸기
      </button>
    </>
  );
};

export default App;
