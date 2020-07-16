import React, { Component } from 'react';
import Notfication from './Notifcation';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
class DashBoard extends Component {

  render()
  {const {projects,auth,notifications}=this.props;

  if(!auth.uid) return  <Redirect to="/signin"/>
    return (
      
      <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6">
                <ProjectList projects={projects}/>
              </div>
              <div className="col s12 m5 offset-m1">
                <Notfication notifications={notifications}/>
              </div>
          </div>
      </div>
    );
  }


}
const mapStatetoProps=(state)=>{
  return{
    projects:state.firestore.ordered.projects,
    auth:state.firebase.auth,
    notifications:state.firestore.ordered.notifications,

  }
}


export default compose(
  connect(mapStatetoProps,null),
  firestoreConnect([
    {collection:'projects',orderBy:['createdAt','desc']},
    {collection:'notifications',limit:3, orderBy:['time','desc']}
  ])
)(DashBoard);