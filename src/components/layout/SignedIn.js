import React, { Profiler } from 'react';
import {NavLink} from 'react-router-dom'
import { signOut } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

const SignInLinks=(props)=>{
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="right">
                    <li><NavLink to="/create">New Project</NavLink></li>
                    <li><a  onClick={props.signOut}>LogOut</a></li>
                    <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
                </ul>
            </div>
        </nav>
      );
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signOut:()=>{dispatch(signOut())}
    }
}

export default connect(null,mapDispatchToProps)(SignInLinks);
