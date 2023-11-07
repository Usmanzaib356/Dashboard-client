import React from 'react'
import { Link } from 'react-router-dom'
function Permission() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="text-center">
          <div className="error mx-auto" data-text="400">400</div>
          <p className="lead text-danger mb-5">Please Login your Account</p>
          <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
          <Link to='/'>&larr; Go to Login</Link>
        </div>

      </div>

    </>
  )
}

export default Permission