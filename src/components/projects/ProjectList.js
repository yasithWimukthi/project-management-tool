import React from 'react';
import {Link} from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

function ProjectList({projects}) {
    return (
        <div className="project-list section">
            {projects && projects.map((project) =>{
                return (
                    <Link to={`/project/${project.id}`}>
                        <ProjectSummary project={project} id={project.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;
