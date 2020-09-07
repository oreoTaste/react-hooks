import { useEffect } from "react";

const useBeforeLeave = (leave) => {
  // var times = 0;
  const handler = (event) => {
    // times++;
    if (typeof leave !== "function") return;
    console.log(event);
    leave();
    // console.log("--------------------------\n" + times);
  };
  useEffect(
    () => {
      document.addEventListener("mouseleave", handler);
    },
    []
    // , [times]
  );
  return () => {
    document.removeEventListener("mouseleave", handler);
  };
};
export default useBeforeLeave;
