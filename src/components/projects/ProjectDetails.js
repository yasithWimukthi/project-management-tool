import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const ProjectDetails = (props) => {

    const {project} = props;

    if(project){
        return(        
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title} </span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>date</div>
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }

}

const mapStatetoProps = (state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return{
        project
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {
            collection: 'projects'
        }
    ])

) (ProjectDetails);
