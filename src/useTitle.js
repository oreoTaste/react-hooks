import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    document.querySelector("title").innerHTML = title;
  }, [title]);

  return setTitle;
};

export default useTitle;
