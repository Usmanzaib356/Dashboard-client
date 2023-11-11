import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Cookies from 'js-cookie';
function Signin() {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [color, setColor] = useState(false);

  const naviagte = useNavigate();

  const { serverURL, setIsLogin, setCurrentUser, setRole } = useAuth();

  const email = useRef();
  const password = useRef();

  async function Submit(e) {
    e.preventDefault();

    if (!loading && validateInputs()) {
      setLoading(true);

      const url = process.env.REACT_APP_SERVER_URL + '/user/login-user';
      const json = {
        email: email.current.value,
        password: password.current.value,
      };

      try {
        const response = await axios.post(url, json);
        setLoading(false);

        setCurrentUser(response.data.user);
        const token = response.data.token;
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 30 * 60 * 1000);
        Cookies.set('token', token, { expires: expirationTime });
        Cookies.set('login', true, { expires: expirationTime });
        Cookies.set('center', response.data.user.dispatch_center, {
          expires: expirationTime,
        });
        Cookies.set('role', response.data.user.role, {
          expires: expirationTime,
        });
        setRole(response.data.user.role);
        setIsLogin(true);
        // setColor(true);
        naviagte('/');
      } catch (err) {
        console.log(err);
        // setColor(false);
      } finally {
        setLoading(false);
      }
    }
  }

  const validateInputs = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (email.current.value.trim() === '') {
      setEmailError('Please enter your email');
      valid = false;
    }

    if (password.current.value.trim() === '') {
      setPasswordError('Please enter your password');
      valid = false;
    }

    return valid;
  };

  return (
    <>
      <form className="signupformContainer py-4">
        <div className="login-form-bg px-2">
          <div className="text-center   ">
            <div>
              {loading ? (
                <div className="three-body">
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                </div>
              ) : (
                <h3 className="form-title">
                  Welcome To <br /> Inventory Management Portal!{' '}
                </h3>
              )}
            </div>

            <div className="input-container mt-4 ">
              <label htmlFor="" className="d-flex mt-2">
                Email
              </label>
              <input
                ref={email}
                type="email"
                placeholder="Enter email Address"
              />
              <p className="error-message text-danger">{emailError}</p>
            </div>
            <div className="input-container mt-4">
              <label htmlFor="" className="d-flex mt-2">
                Passowrd
              </label>
              <input
                className="input-radius-login-f"
                ref={password}
                type="password"
                placeholder="Password"
              />
              <p className="error-message text-danger">{passwordError}</p>
              {/* <p
                className={`text-left ${
                  color ? 'text-success' : 'text-danger'
                } `}
              >
                {msg}
              </p> */}
            </div>
            <div className="submit-container mt-4">
              <button
                className="submitt"
                type="submit"
                onClick={(e) => Submit(e)}
              >
                Login
              </button>
            </div>
            <div className="py-1">
              <div className="font-weight-bolder">Admin </div>
              <div>Username: usman@zaib.com | Password: abc123</div>
              <div className="font-weight-bolder">User </div>
              <div>Username: noor@zakir.com | Password: abc123</div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signin;
