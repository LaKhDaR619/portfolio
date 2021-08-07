import { useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return [show, toggleShow];
};
