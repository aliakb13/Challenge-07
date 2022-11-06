import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';

async function doLogin({ email, password }) {
  const res = await fetch("http://localhost:8000/api/v1/login", {
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
  const res = await fetch("http://localhost:8000/v1/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.parse({
      token
    })
  });
  const data = await res.json();
  return data.token;
}

function Login() {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoggedIn(!!token);
  }, [token])

  function handleSubmit(e) {
    setIsLoading(true);
    setLoggedIn(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    setLoggedIn(false)
    setIsLoading(false)
  }

  const handleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if (response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then(token => {
          localStorage.setItem("token", token);
          setLoggedIn(token);
        })
        .catch(err => console.log(err.message))
        .finally(() => setIsLoading(false))
    }
  }

  const handleFailureGoogle = (response) => { console.log(response); alert(response); }

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
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleSuccessGoogle}
          onFailure={handleFailureGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </form>
  );
}

export default Login;