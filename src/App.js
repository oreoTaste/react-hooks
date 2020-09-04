import React, { useState } from "react";
import "./App.css";

const content = [
  {
    tab: "Section1",
    content: "I'm the content for Section1",
  },

  {
    tab: "Section2",
    content: "I'm the content for Section2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}

      <div className="content">{currentItem.content}</div>
    </div>
  );
};

export default App;
