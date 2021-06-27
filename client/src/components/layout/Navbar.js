import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  constructor() {
    super();
    this.onLougoutClick = this.onLougoutClick.bind(this);
  }

  onLougoutClick(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item" >
          <Link onClick={this.onLougoutClick.bind(this)} className="nav-link" to="/" style={{color:"white"}}>
            
            {""} Log Out
          </Link>
        </li>
      </ul>
    );

    const unauthLinks = (
      <ul className="navbar-nav ml-auto"  >
        <li className="nav-item" >
          <Link className="nav-link" to="/register" style={{color:"white",fontWeight:"bold"}}>
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" style={{color:"white",fontWeight:"bold"}}>
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor:"limegreen",fontWeight:"bold"}}>
        <div className="container" >
          <Link className="navbar-brand" to="/">
            PG MANAGER
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav" >
            {isAuthenticated ? authLinks : unauthLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
