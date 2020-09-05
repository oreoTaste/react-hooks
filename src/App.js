import React, { useState } from "react";

const contents = [
  {
    index: "Section1",
    content: "This is the Content of Section 1",
  },
  {
    index: "Section2",
    content: "This is the Content of Section 2",
  },
];

const useTabs = (initalTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initalTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <>
      {contents.map((content, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {content.index}
        </button>
      ))}

      <div>{currentItem.content}</div>
    </>
  );
};

export default App;
