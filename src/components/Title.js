import React from 'react';
import Name from '../assets/photo.png';


 function Title() {
  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={Name}
            alt="your name"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info"> SHARVINA</span>
          </div>
          {/*<h4 className="font-weight-light">I am a freelancer developer</h4>*/}
        </div>
      </div>
    </div>
  );
}
export default Title;
