// import * as React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';


function NavHero({ diss, onDiss }) {

  // function handleLogout(e) {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setLoggedIn(false)
  // }


  return (
    <div className="container-fluid hero-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light header-nav" style={{ backgroundColor: '#F1F3FF' }}>
        <div className="container-fluid fixed-top headnav-additional" style={{ backgroundColor: '#F1F3FF' }}>
          <a className="navbar-brand" href="#">
            <img src="./images/logo.png" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-4">
                <a className="nav-link menu-nav text-end mt-2" aria-current="page" href="#our-services"
                  style={{ color: 'black' }}>Our
                  Services</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link menu-nav text-end mt-2" href="#why-us" style={{ color: 'black' }}>Why Us</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link menu-nav text-end mt-2" href="#testimonial" style={{ color: 'black' }}>Testimonial</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link menu-nav text-end mt-2 mb-2" href="#faq" style={{ color: 'black' }}>FAQ</a>
              </li>
              <li className="nav-item ms-4">
                <div className="nav-link text-end">
                  <Link to='/login' className="btn btn-success menu-nav me-3" style={{ backgroundColor: '#5CB85F' }}>Login</Link>
                  <Link to='/register' className="btn btn-primary menu-nav">Register</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{ fontWeight: 'bold' }}>BCR</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav ms-auto">
                <ul>
                  <li><a href="#our-services">Our Services</a></li>
                  <li><a href="#why-us">Why Us</a></li>
                  <li><a href="#testimonial">Testimony</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li className="nav-item">
                    <Link to='/login' className="btn btn-success menu-nav mt-2" style={{ backgroundColor: '#5CB85F', color: 'white' }}>Login</Link>
                    <Link to='/register' className="btn btn-primary menu-nav mt-3" style={{ color: 'white' }}>Register</Link>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid hero-section-content pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-5">
            <p className="content-first">Sewa & Rental Mobil Terbaik di kawasan Jakarta</p>
            <p className="content-mid">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
              harga
              terjangkau. Selalu
              siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            {diss ? <Link onClick={onDiss} to='/cari' className="btn btn-success btn-content mt-2" style={{ backgroundColor: '#5CB85F' }}>Mulai
              Sewa
              Mobil</Link> : ''}
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid " src="images/img_car.png" alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHero;