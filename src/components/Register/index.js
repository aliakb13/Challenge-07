import { useState } from 'react'
import React from 'react';

async function doRegister({ email, password }) {
  const res = await fetch("https://challenge-07-api-production.up.railway.app/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return res;
}


function Register() {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    await doRegister({ email, password });
  }

  return (
    <form className="container mt-5 p-3 border-info card" style={{ width: '30rem' }} onSubmit={handleRegister}>
      <div className="card-header bg-transparent">Register</div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email..." onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password..." onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </div>
    </form>
  );
}

export default Register;