import { useState, useEffect } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    if (typeof onChange !== "function") return;
    const handler = () => {
      onChange(navigator.onLine);
      setStatus(navigator.onLine);
    };

    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, [onChange]);
  return status;
};
export default useNetwork;
