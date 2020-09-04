import React, { useState } from "react";

const item = [
  {
    index: "Section1",
    content: "This is the Content of Section 1",
  },
  {
    index: "Section2",
    content: "This is the Content of Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [item, setItem] = useState(initialTab);
  return allTabs.initialTab;
};

const App = () => {
  return <div className="App"></div>;
};

export default App;
