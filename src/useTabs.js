import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  const currentItem = allTabs[currentIndex];

  const changeItem = (index) => {
    setCurrentIndex(index);
  };

  return { currentItem, changeItem };
};

export default useTabs;
