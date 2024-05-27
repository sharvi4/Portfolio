import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white">
      <div className="container my-2">
        <Link to="/home" className="navbar-brand text-dark font-weight-bold" style={{fontSize:"30px"}}> SHARVINA V </Link>
        {/*<Link to="/contact" className="btn btn-outline-info ml-auto mx-15">Contact me</Link>*/}
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            {/*<Link to="/allblog" className="nav-item nav-link text-dark h6 mx-3 my-auto">
              Blogs
  </Link>*/}
            <Link to="/allprojects" className="nav-item nav-link text-dark h6 mx-3 my-auto">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;