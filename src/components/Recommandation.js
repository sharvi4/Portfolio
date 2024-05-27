import React from 'react';
import { Link } from 'react-router-dom';
import TruncateText from './TruncateText'; 
import axios from 'axios';

function Recommandation() {
  
  return (
    <div className="container-fluid my-5">
      <div
        className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar"
      >
        <div className="col-12 col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">
                <TruncateText text="She is so friendly and enthusiastic person " limit={20} />
              </h4>
              <p className="card-text text-secondary mb-0">Person 1</p>
              <p className="card-text text-secondary">friend</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">
                <TruncateText text="She is an excellent developer" limit={20} />
              </h4>
              <p className="card-text text-secondary mb-0">Person 2</p>
              <p className="card-text text-secondary">co-employee</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">
                <TruncateText text="Perfect" limit={20} />
              </h4>
              <p className="card-text text-secondary mb-0">Person 3</p>
              <p className="card-text text-secondary">Manager</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">
                <TruncateText text="He is best" limit={20} />
              </h4>
              <p className="card-text text-secondary mb-0">Person 4</p>
              <p className="card-text text-secondary">Friend</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 mx-3">
        <Link to="/writearecommandation" className="text-dark text-right" style={{textDecoration:'none'}}>
          <h5>
            Share your valuable recommandation here
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </Link>
      </div>
    </div>
    
  );
  {/*async componentDidMount(){
    const response= await axios.get(
      "http://127.0.0.1:9000/api/recommendations"
    );
    console.log(response);
    if(response.data.isSuccessful){
      this.setState({
        recommendations:response.data.results,
      });
    }
  }*/}
}

export default Recommandation;
