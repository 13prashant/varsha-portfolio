import React from 'react';

const Project = ({ project }) => {
  return (
    <div id="project-card">
      <div className="img-div">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img
            className="project-image"
            variant="top"
            src={project.img}
            alt="card-img"
          />
        </a>
      </div>
      <div className="card-body">
        <div className="project-card-header">
          <a href={project.link} target="_blank" rel="noreferrer">
            <h3>{project.title}</h3>
            <div className="right-arrow-up">
              <img src="/img/svg/arrow-up.svg" alt="arrow" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
