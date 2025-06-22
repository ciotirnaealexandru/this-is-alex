import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

import { useState } from "react";

interface MenuElementProps {
  children?: React.ReactNode;
  text: string;
  emoji?: string;
  link?: string;
  open?: boolean;
}

const MenuElement = ({ children, text, emoji, open }: MenuElementProps) => {
  // if i selected open={true}, open the folder by default
  const [state, setState] = useState(open === true);

  let arrow = <div className="ml-4"></div>;
  if (children != null) {
    if (state) arrow = <GoTriangleDown className="text-white text-2xl" />;
    else arrow = <GoTriangleRight className="text-white text-2xl" />;
  }

  return (
    <>
      <button
        onClick={() => setState(!state)}
        className="flex flex-col w-full font-semibold"
      >
        <div className="flex flex-row items-center">
          <span className="text-lg mb-1 mr-2">{emoji}</span>
          <div className="text-white text-lg ">{text}</div>
          {arrow}
        </div>
      </button>

      {/* Children */}
      {state ? <div className="flex flex-col ml-6">{children}</div> : null}
    </>
  );
};

export default MenuElement;
