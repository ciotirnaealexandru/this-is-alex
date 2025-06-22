import { useState } from "react";

import NormalBackground from "../../components/NormalBackground/NormalBackground";
import NavBar from "../../components/Navbar/NavBar";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Article from "../../components/Article/Article";

import "../Projects/Projects.scss";
import "../../articles/Tags.scss";
import "../../articles/Images.scss";

const Projects = () => {
  // print a default article
  const [article, setArticle] = useState("Default.md");

  return (
    <NormalBackground>
      <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-between">
        <NavBar />
        <div className="flex flex-row w-full h-full overflow-hidden">
          {/* The title column with the dropdown menu*/}
          <div className="bg-[#030712] w-lg">
            <DropdownMenu />
          </div>

          {/* The article */}
          <div className="flex pl-16 pr-8 w-full h-full">
            <Article link={article} />
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Projects;
