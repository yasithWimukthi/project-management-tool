import React from 'react';
import ProjectSummary from './ProjectSummary';

function ProjectList({projects}) {
    return (
        <div className="project-list section">
            {projects && projects.map((project) =>{
                return (
                    <ProjectSummary project={project} id={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;
