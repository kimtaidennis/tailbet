import React from 'react'

export default function Contact() {
  return (
    <div className="container">
      <div className="my-5 w-50">
        <form>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="form-group custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  )
}
