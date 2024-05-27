import React from 'react'
import { Link } from 'react-router-dom';

 function Footer() {
  return (
    <footer>
      <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          {/*<Link to="/talk" className="btn btn-outline-info ml-auto mx-15">Let's Talk</Link>*/}
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3" >More links</h5>
            <Link to="/home" className="text-light d-block" style={{textDecoration:'none'}}>Home</Link>
            <Link to="/allprojects" className="text-light d-block" style={{textDecoration:'none'}}>Projects</Link>
            <Link to="/contact" className="text-light d-block" style={{textDecoration:'none'}}>Contact me</Link>
            <Link to="/writearecommandation" className="text-light" style={{textDecoration:'none'}}>
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Happy to see you here. I hope you have gone through all my
              projects and works, If you want to develop an website you can
              contact me through the social media links.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="https://www.linkedin.com/in/sharvina-v/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="https://github.com/sharvi4?tab=repositories">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="mailto:sharvinaangelin04@gmail.com">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="py-3" style={{color:"white"}}>
          <p>Copyright © Sharvina V</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
