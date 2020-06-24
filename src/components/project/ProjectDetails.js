import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';


const ProjectDetails=(props)=>{
    const {auth}=props;

    if(!auth.uid) return  <Redirect to="/signin"/>
    if(props.project)
    {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0 ">
                    <div className="card-content">
                        <span className="card-title">Project Title - {props.project.title}</span>
                        <p>{props.project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {props.project.authorFirstName} {props.project.authorLastName}</div>
                        <div>{moment(props.project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>  
            </div>
          );
    }
    else{
        return(
        <div className="center">
            <h4>Loading...</h4>
        </div>
        );
    }
}

const mapStatetoProps=(state,ownProps)=>{
    console.log(state);
    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects;
    const project=projects?projects[id]:null;
    return{
      project:project,
      auth:state.firebase.auth
    }
  }

export default compose(
    connect(mapStatetoProps,null),
    firestoreConnect([{
        collection:'projects'
    }])
)(ProjectDetails);
