import { useState } from "react";

const useInput = (msg = "", validator) => {
  const [value, setValue] = useState(msg);

  if (typeof validator !== "function") return;

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    if (validator(value)) setValue(value);
  };
  return { value, onChange };
};

export default useInput;
