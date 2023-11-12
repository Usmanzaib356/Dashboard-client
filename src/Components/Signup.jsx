import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from "../hooks/useAuth"
import axios from 'axios'
import Cookies from 'js-cookie';
function Signup() {

  // usestate
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")


  // useNavigate
  const naviagte = useNavigate()


  // Context Api
  const { Server_Url, setIsLogin, setRolee,rolee } = useAuth()


  // UseRef 
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const role = useRef()
  const secretkey = useRef()


  // Buttun Function
  function Submit(e) {
    setLoading(true)
    e.preventDefault()




    // Axois Post request

    const url = process.env.REACT_APP_SERVER_URL + "/signup"
    const json = {
      name: name.current.value,
      email: email.current.value, 
      password: password.current.value,
      role: role.current.value,
      secret_key: secretkey.current.value
    }

    axios.post(url, json).then(
      (res) => {
        setIsLogin(true);
        setLoading(false)
        setRolee(res.data.output.role)
         const tokenExpire = new Date()
         tokenExpire.setDate(tokenExpire.getDate()+7)
        Cookies.set("islogin",true,{expires:tokenExpire})
        const token = res.data.token
        Cookies.set("Token",token,{expires:tokenExpire})
        if (res.data.output.role === "admin") {
          return naviagte("/admin")
      }
      naviagte("/allprodcuts")
      }).catch(
        (err) => {
          console.log(err);
          setLoading(false)
          setIsLogin(false)
          naviagte("/signup")
          setMsg(err.response.data);
        })

  }


  return (
    <>
      <div className='signupformContainer'>
        <div className="signupform">
          <form className="formm">
            <br />
            <h1 className="form-title"> {loading ? ((<div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>)) : ("Sign Up")}</h1>
            <p className='mt-3 text-danger'>{msg}</p>
            <div className="input-container">
              <input ref={name} type="email" placeholder="Enter Name" />
              <span>
              </span>
            </div>
            <div className="input-container">
              <input ref={email} type="email" placeholder="Enter email" />
              <span>
              </span>
            </div>
            <div className="input-container">
              <input ref={password} type="password" placeholder="Enter password" />
            </div>
            <div className="input-container">
              <input ref={role} type="password" placeholder="Enter Role" />
            </div>
            <div className="input-container">
              <input ref={secretkey} type="password" placeholder="Enter Secret key" />
            </div>
            <div className="submit-container mt-2">
                  <button className="submit" onClick={(e)=>Submit(e)}>Sign Up</button>
                </div>
            <br />
            <p className="signup-link">
              Already have account?
              <Link to="/" >Sign in</Link>
            </p>
          </form>

        </div>
      </div>
    </>
  )
}

export default Signup