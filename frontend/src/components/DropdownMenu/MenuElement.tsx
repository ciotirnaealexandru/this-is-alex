import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

import { useState } from "react";
import { motion } from "framer-motion";

interface MenuElementProps {
  children?: React.ReactNode;
  text: string;
  emoji?: string;
  type: string;
  open?: boolean;
  article?: string;
  setArticle?(article: string): void;
}

const MenuElement = ({
  children,
  text,
  emoji,
  type,
  open,
  article,
  setArticle,
}: MenuElementProps) => {
  // if i selected open={true}, open the folder by default
  const [state, setState] = useState(open === true);

  let arrow = <div></div>;
  if (children != null) {
    if (state) arrow = <GoTriangleDown className="text-white text-2xl ml-1" />;
    else arrow = <GoTriangleRight className="text-white text-2xl ml-1" />;
  }

  let sizedText;
  if (type == "domain")
    sizedText = <div className="text-white text-lg font-bold">{text}</div>;
  else sizedText = <div className="text-white text-md">{text}</div>;

  return (
    <>
      <button
        onClick={() => {
          setState(!state);
          if (article !== undefined && setArticle !== undefined) {
            setArticle(article);
          }
        }}
        className="flex flex-col w-full font-semibold "
      >
        <div className="flex flex-row items-center">
          {/* Emoji */}
          <span className="text-lg mb-1 mr-2">{emoji}</span>
          <div className="flex flex-row items-center hover:cursor-pointer">
            {/* Text */}
            {sizedText}
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
