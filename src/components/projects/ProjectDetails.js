import React from 'react';

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>lorem ipsum dolor sit am</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by .....</div>
                    <div>date</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
