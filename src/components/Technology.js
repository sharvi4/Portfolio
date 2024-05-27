import React from 'react'
import a from '../assets/html5.png'
import b from '../assets/css3.png'
import c from '../assets/javascript.png'
import d from '../assets/bootstrap4.png'
import e from '../assets/react.png'
import f from '../assets/mysql.png'
import g from '../assets/python.png'
import h from '../assets/flask.png'
import i from '../assets/nodejs.png'

 function Technology() {
  return (
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-light">
          <span className="text-info">Technology</span> stack
        </h1>
        <div className="lead pb-5">I can work on with these,</div>
        <div className="d-flex container-fluid justify-content-around py-3">
          <div>
            <img
              className="rounded-circle"
              src={a}
              alt="test img"
              style={{width: "100px", height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-circle"
              src={b}
              alt="test img"
              style={{width: "100px",height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-circle"
              src={c}
              alt="test img"
              style={{width: "100px",height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="">★</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-circle"
              src={d}
              alt="test img"
              style={{width: "100px",height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around py-3">
          <div>
            <img
              className="rounded-circle img-fluid"
              src={e}
              alt="test img"
              style={{width: "100px",height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="">★</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-circle img-fluid"
              src={i}
              alt="test img"
              style={{width: "100px",height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="">★</span>
              <span className="">★</span>
            </div>
          </div>
          
          <div>
            <img
              className="rounded-circle img-fluid"
              src={f}
              alt="test img"
              style={{width: "100px",height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="">★</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-circle img-fluid"
              src={g}
              alt="test img"
              style={{width: "100px",height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
            </div>
          </div>
          
          <div>
            <img
              className="rounded-circle img-fluid"
              src={h}
              alt="test img"
              style={{width: "100px", height: "100px"}}
            />
            <div>
              <span className="text-info">★</span>
              <span className="text-info">★</span>
              <span className="">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Technology;
