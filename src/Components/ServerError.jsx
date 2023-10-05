import React from 'react'
import { Link } from 'react-router-dom'
function ServerError() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="text-center">
                    <div className="error mx-auto" data-text="500">500</div>
                    <p className="lead text-gray-800 mb-5">Internal Server Error</p>
                    <Link to='/'>&larr; Back to Dashboard</Link>
                </div>
            </div>
        </>
    )
}

export default ServerError