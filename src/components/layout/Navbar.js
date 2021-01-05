import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">ProjectManager</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

const mapStatetoProps = (state) =>{
    return {
        
    }
}

export default connect(mapStatetoProps) (NavBar);
