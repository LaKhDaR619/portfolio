import { useState } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [show, setShow] = useState(initialValue);

  const toggleShow = () => setShow(!show);

  return [show, toggleShow];
};
