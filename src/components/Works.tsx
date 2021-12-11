import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Header from "./common/Header";
import projects from "../projects.json";
import "./Works.scss";

const Works: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = "My Work";
  });

  return (
    <div className="container">
      <Header
        largeHeading="My Work"
        smallHeading="Check out some of my projects..."
      />
      <div className="projects">
        {projects.map((project, index) => (
          <div className="projects__item" key={index}>
            <a href={project.github} className="projects__item__card">
              <img
                className="projects__item__card__img"
                src={require(`../assets/project/${project.img}`).default}
                alt={project.name}
              />
              <p className="projects__item__card__desc">
                {project.description}
              </p>
            </a>
            <a href={project?.website} className="btn btn-light">
              <FontAwesomeIcon icon={faEye} /> {project.name}
            </a>
            <a href={project.github} className=" btn btn-dark">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
