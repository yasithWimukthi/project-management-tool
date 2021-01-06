import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = (props) => {

    const {auth,profile} = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">ProjectManager</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStatetoProps = (state) =>{
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStatetoProps) (NavBar);
