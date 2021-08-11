import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useRef } from "react";

type Props = {
  id: string;
  className: string;
  setActiveNavItem?: (activeItem: string) => void;
};

const Section: React.FC<Props> = ({
  id,
  className,
  setActiveNavItem,
  children,
}) => {
  const ref = useRef<HTMLElement>();

  useScrollPosition(({ prevPos, currPos }) => {
    if (!ref.current) return;

    const sectionHeight = ref.current.offsetHeight;
    const sectionTop = ref.current.offsetTop - 50;

    if (
      currPos.y * -1 > sectionTop &&
      currPos.y * -1 <= sectionTop + sectionHeight
    )
      if (setActiveNavItem) setActiveNavItem(id);
  });

  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
};

export default Section;
