import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

import { useState } from "react";
import { motion } from "framer-motion";

interface MenuElementProps {
  children?: React.ReactNode;
  text: string;
  emoji?: string;
  link?: string;
  open?: boolean;
}

const MenuElement = ({
  children,
  text,
  emoji,
  link,
  open,
}: MenuElementProps) => {
  // if i selected open={true}, open the folder by default
  const [state, setState] = useState(open === true);

  let arrow = <div></div>;
  if (children != null) {
    if (state) arrow = <GoTriangleDown className="text-white text-2xl ml-1" />;
    else arrow = <GoTriangleRight className="text-white text-2xl ml-1" />;
  }

  return (
    <>
      <button
        onClick={() => setState(!state)}
        className="flex flex-col w-full font-semibold "
      >
        <div className="flex flex-row items-center">
          {/* Emoji */}
          <span className="text-lg mb-1 mr-2">{emoji}</span>
          <div className="flex flex-row items-center hover:cursor-pointer">
            {/* Text */}
            <div className="text-white text-lg">{text}</div>
            {/* Arrow icon */}
            {arrow}
          </div>
        </div>
      </button>

      {/* Children */}
      <motion.div
        className="ml-6"
        initial={false}
        animate={{ height: state ? "auto" : 0 }}
        style={{ overflow: "hidden" }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MenuElement;
