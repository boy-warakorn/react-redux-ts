import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "./modules/modals/slice";
import { loadProject } from "./modules/strokes/thunk/loadProject";
import { getProjectsList } from "./modules/projectsList/thunk/getProjectsList";
import { projectsListSelector } from "./modules/projectsList/selectors";

export const ProjectsModal = () => {
  const projectsList = useSelector(projectsListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsList());
  }, []);

  const onLoadProject = (projectId: string) => {
    dispatch(loadProject(projectId));
    dispatch(hide());
  };

  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => dispatch(hide())} />{" "}
        </div>
      </div>
      <div className="projects-container">
        {(projectsList.projects || []).map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => onLoadProject(project.id)}
              className="project-card"
            >
              <img src={project.image} alt="thumbnail" />
              <div>{project.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
