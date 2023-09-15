import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from "../hooks/useAuth"
import axios from 'axios'
import Cookies from 'js-cookie'
function Signin() {



  // usestate
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');



  // useNavigate
  const naviagte = useNavigate()


  // Context Api
  const { Server_Url, setIsLogin } = useAuth()


  // UseRef 
  const email = useRef()
  const password = useRef()
  const role = useRef()
  const secretkey = useRef()


  // Buttun Function
  function Submit(e) {
    e.preventDefault()


    if (!loading && validateInputs()) {
      setLoading(true);

      // Perform login logic here
      
      setLoading(false);
    }


    // Axois Post request

    const url = Server_Url + "/signin"
    const json = {
      email: email.current.value,
      password: password.current.value,
      role: role.current.value,
      secret_key: secretkey.current.value
    }

    axios.post(url, json).then(
      (res) => {
        setIsLogin(true);
        setLoading(false)
        console.log(res);
        Cookies.set("islogin", true)
        const token = res.data.token
        const tokenExpire = new Date()
        tokenExpire.setDate(tokenExpire.getDate() + 7)
        Cookies.set("Token", token, { expires: tokenExpire })
        naviagte("/admin ")

      }).catch(
        (err) => {
          console.log(err);
          setLoading(false)
          setIsLogin(false)
          naviagte("/")
          setMsg(err.response.data);
        })

  }



  const validateInputs = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (email.current.value.trim() === '') {
      setEmailError('Please enter your email.');
      valid = false;
    }

    if (password.current.value.trim() === '') {
      setPasswordError('Please enter your password.');
      valid = false;
    }

    return valid;
  };


  return (
    <>


      <form className='signupformContainer py-4'>

        <div className='login-form-bg px-2'>

          <div className='text-center   '>

            <div>
              {loading ? ((<div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
              </div>)) : <h3 className='form-title'>Welcome To <br /> Inventory Management Portal! </h3>}


            </div>

            <div className="input-container mt-4 ">
              <label htmlFor="" className='d-flex mt-2'>Email</label>
              <input ref={email} type="email" placeholder="Enter email Address" />
              <p className="error-message text-danger">{emailError}</p>
            </div>
            <div className="input-container mt-4">
              <label htmlFor="" className='d-flex mt-2'>Passowrd</label>
              <input className='input-radius-login-f' ref={password} type="password" placeholder="Password" />
              <p className="error-message text-danger">{passwordError}</p>
            </div>

            <div className="submit-container mt-4">
              <a className="submitt" href='#' onClick={(e) => Submit(e)}>Login</a>
            </div>

          </div>

        </div>

      </form>


    </>
  )
}

export default Signin;