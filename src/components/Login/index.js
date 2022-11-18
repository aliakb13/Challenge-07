import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { Navigate } from 'react-router-dom';
// var config = require('../../../.env')

async function doLogin({ email, password }) {
  const res = await fetch("https://challenge-07-api-production.up.railway.app/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await res.json();
  return data.token;
}

async function doLoginWithGoogle(token) {
  const res = await fetch("https://challenge-07-api-production.up.railway.app/v1/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token
    })
  });
  const data = await res.json();
  // console.log("teasdoiajdi");
  return data.token;
}

function Login() {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   setLoggedIn(!!token);
  // }, [token])

  function handleSubmit(e) {
    // setIsLoading(true);
    setLoggedIn(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message));
    // .finally(() => setIsLoading(false));
  }

  // function handleLogout(e) {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setLoggedIn(false)
  //   setIsLoading(false)
  // }

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.credential);
    if (response.credential) {
      doLoginWithGoogle(response.credential)
        .then((_token) => {
          localStorage.setItem("token", response.credential);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err.message))

      // localStorage.setItem("token", response.tokenId);
      // setIsLoggedIn(response.tokenId);

    }
  }

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  }

  return (
    <form className="container mt-5 p-3 border-success card" style={{ width: '30rem' }} onSubmit={handleSubmit}>
      <div className="card-header bg-transparent">Login</div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email..." onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password..." onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success me-3">Login</button>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              haldleSuccessGoogle(credentialResponse);
            }}
            onError={() => {
              haldleFailureGoogle('Error Login')
            }}
          />
        </GoogleOAuthProvider>
        {loggedIn ? <Navigate to="/cari" /> : ""}

      </div>
    </form>
  );
}

export default Login;