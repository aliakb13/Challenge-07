import React from 'react';

function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <p className="ms-2 footer-address">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p className="ms-2">binarcarrental@gmail.com</p>
          <p className="ms-2">081-233-334-808</p>
        </div>
        <div className="col-md-3 col-sm-12">
          <a className="footer-nav ms-sm-2 ms-md-5" href="#our-services">Our services</a>
          <a className="footer-nav ms-sm-2 mt-3 ms-md-5" href="#why-us">Why Us</a>
          <a className="footer-nav ms-sm-2 mt-3 ms-md-5" href="#testimonial">Testimonial</a>
          <a className="footer-nav ms-sm-2 mt-3 ms-md-5" href="#faq">FAQ</a>
        </div>
        <div className="col-md-3 col-sm-12">
          <p className="ms-2 mt-sm-2 mt-md-0">Connect with us</p>
          <img className="img-fluid ms-2" src="images/icon_facebook.png" alt="fb-logo" />
          <img className="img-fluid ms-2" src="images/icon_instagram.png" alt="ig-logo" />
          <img className="img-fluid ms-2" src="images/icon_twitter.png" alt="twit-logo" />
          <img className="img-fluid ms-2 mt-sm-2 mt-lg-0" src="images/icon_mail.png" alt="mail-logo" />
          <img className="img-fluid ms-2 mt-sm-2 mt-xl-0" src="images/icon_twitch.png" alt="twitch-logo" />
        </div>
        <div className="col-md-3 col-sm-12">
          <p className="ms-2 mt-sm-2 mt-md-0">Copyright Binar 2022</p>
          <img className="ms-2" src="images/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;