import React from 'react'

 function Contact() {
  return (
    <div className="container-fluid py-5 my-5">
      <h1 className="text-center ">Contact Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address*</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary my-5" style={{display:"block", margin:"auto"}}>Submit</button>
      </form>
    </div>
  )
}
export default Contact;
