import React, { Component } from 'react';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import DashBoard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import CreateProject from './components/project/CreateProject';


class App extends Component {

  render()
  {
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/create" component={CreateProject}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
