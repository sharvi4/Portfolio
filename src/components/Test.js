import React, { Component } from 'react'
import axios from "axios"

 class Test extends Component {
    onClick = async () =>{
        const response=await axios.get("http://127.0.0.1:5000")
    }
  render() {
    return (
      <div className='my-5 py-5'>
        <button className='btn btn-dark btn-lg' onClick={this.onClick}>Click me</button>
        </div>
    )
  }
}
export default Test;
