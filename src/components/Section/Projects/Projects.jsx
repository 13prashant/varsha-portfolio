import React from 'react';
import Project from './Project';
import './Projects.scss';

const Projects = ({ dataBase }) => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <p>Here are a few projects I've worked on recently.</p>
      <div className="subProject">
        {dataBase.projects.map((project) => (
          <div className="projectContent">
            <Project key={project.id} project={project} />
          </div>
        ))}
      </div>

      <div class="projectsViewAll">
        <a href="http://localhost:3000/">
          <button class="js15">
            View All
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="js16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};
export default Projects;
