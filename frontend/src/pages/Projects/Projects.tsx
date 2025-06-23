import { useState } from "react";

import NormalBackground from "../../components/NormalBackground/NormalBackground";
import NavBar from "../../components/Navbar/NavBar";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Article from "../../components/Article/Article";

import "../Projects/Projects.scss";
import "../../articles/Tags.scss";
import "../../articles/Images.scss";

import Constants from "../../Constants";

const Projects = () => {
  // print a default article
  const [article, setArticle] = useState("Default.md");
  const [menu, setMenu] = useState(!Constants.IS_MOBILE_WIDTH);

  return (
    <NormalBackground>
      <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-between">
        <NavBar menu={menu} setMenu={setMenu} />
        <div className="flex flex-row w-full h-full overflow-hidden">
          {/* The title column with the dropdown menu*/}
          {menu ? (
            <div className="bg-[#030712] w-lg">
              <DropdownMenu setArticle={setArticle} />
            </div>
          ) : null}

          {/* The article */}
          <div className="flex pl-16 sm:pr-8 w-full h-full">
            <Article article={article} />
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Projects;
