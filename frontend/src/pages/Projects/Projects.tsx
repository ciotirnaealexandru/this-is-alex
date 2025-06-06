import NormalBackground from "../../components/NormalBackground/NormalBackground";
import NavBar from "../../components/Navbar/NavBar";
import Markdown from "react-markdown";

import Test from "../../articles/Test.md?raw";

const Projects = () => {
  return (
    <NormalBackground>
      <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-between">
        <NavBar />
        <div className="flex flex-row w-full h-full overflow-hidden">
          {/* The title column*/}
          <div className="bg-[#030712] w-lg"></div>
          <div className="p-16 max-w-none w-full h-full prose prose-invert overflow-auto">
            <Markdown>{Test}</Markdown>
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Projects;
