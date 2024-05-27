import React from 'react'
import a from '../assets/free-stock-image-1.jpg'
import b from '../assets/free-stock-image-2.jpg'
import c from '../assets/free-stock-image-3.jpg'
import { Link } from 'react-router-dom'

 function Allblog() {
  return (
    <div className="container-fluid text-center py-5 my-5">
        <h1 className="font-weight-light">All <span className="color:blue">Blogs</span></h1>
        <div className="row my-5 pt-3">
        <div className="col-12 col-md-4 my-2">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={a}
              alt="Free image"
            />
            <div className="card-body">
              <h4 className="card-title">Blog 1</h4>
              <p className="card-text">This is my Blog about...</p>
              <a href="/" className="stretched-link"></a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 my-2">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={b}
              alt="Free image"
            />
            <div className="card-body">
              <h4 className="card-title">Blog 2</h4>
              <p className="card-text">This is my Blog about...</p>
              <a href="/" className="stretched-link"></a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 my-2">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={c}
              alt="Free image"
            />
            <div className="card-body">
              <h4 className="card-title">Blog 3</h4>
              <p className="card-text">This is my Blog about...</p>
              <a href="/" className="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 my-2">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={a}
              alt="Free image"
            />
            <div className="card-body">
              <h4 className="card-title">Blog 4</h4>
              <p className="card-text">This is my Blog about...</p>
              <a href="/" className="stretched-link"></a>
            </div>
          </div>
        </div>  
    </div>

  )
}
export default Allblog;
