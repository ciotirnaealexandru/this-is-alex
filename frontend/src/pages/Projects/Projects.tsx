import NormalBackground from "../../components/NormalBackground/NormalBackground";
import NavBar from "../../components/Navbar/NavBar";

import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import rehypeRaw from "rehype-raw";

import "../Projects/Projects.scss";
import "../../articles/Tags.scss";
import "../../articles/Images.scss";

import Test from "../../articles/Holbein_and_Linear_Transformations/Holbein_and_Linear_Transformations.md?raw";

const Projects = () => {
  return (
    <NormalBackground>
      <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-between">
        <NavBar />
        <div className="flex flex-row w-full h-full overflow-hidden">
          {/* The title column*/}
          <div className="bg-[#030712] w-lg"></div>
          <div className="flex py-16 pl-16 pr-8 w-full h-full">
            <div className="flex-grow max-w-none w-full h-full prose prose-invert overflow-y-auto add-custom-scrollbar">
              <div className="pr-8">
                <Markdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex, rehypeRaw]}
                >
                  {Test}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NormalBackground>
  );
};

export default Projects;
