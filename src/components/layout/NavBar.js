import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedIn';
import SignedOutLinks from './SignedOut';
import {connect} from 'react-redux';

const NavBar=(props)=>{
    const {auth, profile}=props;
    const links=auth.uid?<SignedInLinks profile={profile}/>:<SignedOutLinks/>;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div>
                <div className="container">
                    <Link to="/" className="brand-logo">MarioPlan</Link>
                </div>
                <div className="container-fluid">
                    {links}
                </div>
            </div>
        </nav>
      );
}

const mapStatetoProps=(state)=>{
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
  }

export default connect(mapStatetoProps)(NavBar);
