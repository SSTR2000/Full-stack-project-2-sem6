import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";


// const clean = require("../../img/cleaning.jpg");
const student = require("../../img/resident.jpg");
const staff = require("../../img/staffnew.png");
const bedRoom = require("../../img/grievance.jpg");
class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid container" >
        <div className="text-center" style={{ fontSize: "25px",fontWeight:"bolder"}}>
          Welcome back <span style={{ fontSize: "40px",fontWeight:"bold"}}>{user.name}!!</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>

          <div className="card hoverable" style={{ width: "18rem", hover: '', height: '22rem',alignItems:"center",textAlign:"center",backgroundColor:"violet"  }}>
            <img src={student} className="card-img-top" alt="Cleaning" style={{ height:'13rem'}}/>
            <div className="card-body" style={{ height: '10rem' }}>
              <h5 className="card-title">Resident Entry</h5>
              <button style={{ backgroundColor:"black"}}>
              <a href="/student" className="card-text" style={{color:"white"}}>
                GO
              </a>
              </button>
            </div>
          </div>

          <div className="card " style={{ width: "18rem", hover: '', height: '22rem',alignItems:"center",textAlign:"center",backgroundColor:"violet" }}>
            <img src={bedRoom} className="card-img-top" alt="Cleaning" style={{ height:'13rem'}}/>
            <div className="card-body">
              <h5 className="card-title">Grievance Entry</h5>
              <button style={{ backgroundColor:"black"}}>
              <a href="/block" className="card-text" style={{color:"white"}}>
                GO
              </a>
              </button>
            </div>
          </div>

          <div className="card " style={{ width: "18rem", hover: '', height: '22rem',alignItems:"center",textAlign:"center",backgroundColor:"violet"}}>
            <img src={staff} className="card-img-top" alt="Cleaning" style={{ height:'13rem',backgroundColor:"white"}}/>
            <div className="card-body">
              <h5 className="card-title">Staff Entry</h5>
              <button style={{ backgroundColor:"black",color:"white"}}>
              <a href="/staff" className="card-text" style={{color:"white"}}>
                GO
              </a>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);
