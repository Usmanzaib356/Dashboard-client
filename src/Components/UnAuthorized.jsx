import React from 'react'
import { Link } from 'react-router-dom';

function UnAuthorized() {
  return (
    <div className="container-fluid mt-5">
        <div className="text-center">
          <div className="error mx-auto" data-text="Sorry">Sorry</div>
          <p className="lead text-danger mt-3">You have not access to see this route</p>
          <Link to='/products'>&larr; Go to Login</Link>
        </div>

      </div>
  )
}

export default UnAuthorized;