import React from 'react'
import a from '../assets/music2.jpg'
import b from '../assets/events.png'
import c from '../assets/chatbot.jpg'
import { Link } from 'react-router-dom'

 function Allprojects() {
  return (
    <div className="container-fluid text-center py-5 my-5">
        <h1 className="font-weight-light">All <span className="color:blue">Projects</span></h1>
        <div className="row my-5 pt-3">
        <div className="col-12 col-md-4 my-2">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={a}
              alt="Free image"
            />
            <div className="card-body">
              <h4 className="card-title">Music Player</h4>
              <p className="card-text">This is my project about...</p>
              <Link to="/player" className="stretched-link"></Link>
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
              <h4 className="card-title">Events</h4>
              <p className="card-text">This is my project about...</p>
              <Link to="/eventpage" className="stretched-link"></Link>
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
              <h4 className="card-title">ChatBot</h4>
              <p className="card-text">This is my project about...</p>
              <Link to="/chatbotpage" className="stretched-link"></Link>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="col-12 col-md-4 my-2">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={a}
              alt="Free image"
            />
            <div className="card-body">
              <h4 className="card-title">Project 4</h4>
              <p className="card-text">This is my project about...</p>
              <a href="/" className="stretched-link"></a>
            </div>
          </div>
        </div>  */}
    </div>

  )
}
export default Allprojects;
