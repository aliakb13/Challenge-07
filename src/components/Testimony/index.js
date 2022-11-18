import React from 'react';

function Testimony() {
  return (
    <section id="testimonial">
      <div className="container pt-5 testimony">
        <h2 className="h2 text-center">Testimonial</h2>
        <p className="text-center py-3 h3">Berbagai review positif dari para pelanggan kami</p>
        <div id="carouselExampleControls" className="carousel slide mx-auto additional-carousel" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active additional-carousel-item">
              <div className="row mx-4 my-5">
                <div className="col-xl-2 m-auto">
                  <img src="images/img_photo_user1.png" className="d-block testimonial-img m-auto" alt="Person" />
                </div>
                <div className="col-xl-10 carousel-content">
                  <img src="images/Rate.png" className="testimonial-rating mt-3" alt="Rating" />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed
                    do eiusmod”</p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item additional-carousel-item">
              <div className="row mx-4 my-5 carousel-content">
                <div className="col-xl-2 m-auto ">
                  <img src="images/img_photo_user2.png" className="d-block testimonial-img m-auto" alt="Person" />
                </div>
                <div className="col-xl-10">
                  <img src="images/Rate.png" className="testimonial-rating" alt="Rating" />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed
                    do eiusmod””</p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item additional-carousel-item">
              <div className="row mx-4 my-5 carousel-content">
                <div className="col-xl-2 m-auto">
                  <img src="images/img_photo_user3.jpeg" className="d-block testimonial-img m-auto rounded-circle"
                    alt="Person" />
                </div>
                <div className="col-xl-10">
                  <img src="images/Rate.png" className="testimonial-rating" alt="Rating" />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed
                    do eiusmod””</p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev btn-carousel" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
          <div className="text-center">
            <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
              className="testimonial-media me-2">&#8249;</a>
            <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
              className="testimonial-media ms-2">&#8250;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony