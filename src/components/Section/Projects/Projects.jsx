import Project from './Project';
import './Projects.scss';

const Projects = ({ dataBase }) => {
  return (
    <section id="projects" className="s2">
      <div className="container">
        <div className="projects wrapper">
          <h1 className="heading">Projects</h1>
          <p>Here are a few projects I've worked on recently.</p>
          <div className="subProject">
            {dataBase.projects.map((project) => (
              <div key={project.id} className="projectContent">
                <Project project={project} />
              </div>
            ))}
          </div>

          <div className="projectsViewAll">
            <a href="/">
              <button className="js15">
                View All
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="js16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
