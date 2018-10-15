import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props;
    const link = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to={"/todo-with-redux-firebase/"} className={"brand-logo"}>MarioPlan</Link>
                { link }
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
};
export default connect(mapStateToProps)(Navbar);