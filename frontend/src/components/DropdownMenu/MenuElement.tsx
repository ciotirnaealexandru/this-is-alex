import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

import { useState } from "react";

interface MenuElementProps {
  children?: React.ReactNode;
  text: string;
}

const MenuElement = ({ children, text }: MenuElementProps) => {
  const [state, setState] = useState(0);

  let arrow = <div className="ml-4"></div>;
  if (children != null) {
    if (state == 1) arrow = <GoTriangleRight className="text-white text-2xl" />;
    else arrow = <GoTriangleDown className="text-white text-2xl" />;
  }

  return (
    <>
      <button
        onClick={() => setState(state == 1 ? 0 : 1)}
        className="flex flex-col w-full font-semibold"
      >
        <div className="flex flex-row">
          {arrow}
          <div className="text-white">{text}</div>
        </div>
      </button>

      {/* Children */}
      {state == 1 ? <div className="flex flex-col ml-5">{children}</div> : null}
    </>
  );
};

export default MenuElement;
