import React from "react";

const projectList = [
  {
    name: "Youtube clone",
    description: "Built a highly scalable, performant, responsive video content app, debouncing to optimise search, N-level comments, infinite scroll, caching using Redux",
    githubURL: "https://github.com/aadeshkulkarni/youtube-clone",
    appURL: "https://youtubespinoff.netlify.app/",
    ss: "./youtube-ss.png"
  },
  {
    name: "Netflix clone",
    description: "Built a highly scalable, fast loading, performant Video streaming platform with a recommendation engine that is powered by GPT API",
    githubURL: "https://github.com/aadeshkulkarni/netflix-clone",
    appURL: "https://cinemacentral.netlify.app/login",
    ss: "./netflix-ss.png"
  },
  {
    name: "Swiggy clone",
    description: "Frontend of an online food delivery app built using React, Redux, TailwindCSS & Jest",
    githubURL: "https://github.com/aadeshkulkarni/swiggy-clone",
    appURL: "https://github.com/aadeshkulkarni/swiggy-clone",
    ss: "./netflix-ss.png"
  },
];

const Projects = () => {
  return (
    <div className="w-screen my-12 md:my-0 md:h-screen flex flex-col justify-center items-center">
      <div className="text-lg font-bold">Projects</div>
      <div className="flex flex-col md:flex-row justify-center items-center">
      {projectList.map((project) => (
        <div className="mx-2 w-[400px] h-[500px] border border-gray-100 md:shadow-lg p-4 rounded-xl flex flex-col justify-center items-center">
          <div className="text-xl pb-4 font-bold">{project.name}</div>
          <img className="w-full aspect-video min-h-[240px]" src={project.ss} alt={project.name} />
          <div className="text-md py-2 overflow-ellipsis line-clamp-3">{project.description}</div>
          <div className="flex justify-between items-center py-2">
            <a className="flex font-bold" href={project.githubURL}>
              Github <img className="w-8 h-8 mx-4 " src="./github.png" alt={project.name} />
            </a>
            <a className="flex font-bold" href={project.appURL}>
              <img className="w-8 h-8 mx-4 " src="./youtube.png" alt={project.name} /> App
            </a>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Projects;
