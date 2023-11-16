import React from "react";
import { render, screen } from '@testing-library/react'
import ProjectItem from "./ProjectItem";

function ProjectList({ projects })  {
  render(<ProjectList projects={projects}/>)
}
  
  for (const project of projects){
    await screen.findByText(project.name)
    }
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" >
        <ProjectItem projects= {projects.id}/>
       
      </div>
    </div>
  );
  




export default ProjectList;
