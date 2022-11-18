import React from 'react';

function WhyUs() {
  return (
    <section id="why-us">
      <div className="container why-us pt-5">
        <p className="ms-3 why-us-text">Why Us?</p>
        <p className="ms-3 why-us-text2">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3 mb-3">
            <div className="card ms-3 additional-card">
              <img src="images/icon_complete.png" className="card-img-top img-card mt-3 ms-3" alt="sip" />
              <div className="card-body">
                <h5 className="card-title title-why-us">Mobil Lengkap</h5>
                <p className="card-text text-why-us">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 mb-3">
            <div className="card ms-3 additional-card">
              <img src="images/icon_price.png" className="card-img-top img-card mt-3 ms-3" alt="sip" />
              <div className="card-body">
                <h5 className="card-title title-why-us">Harga Murah</h5>
                <p className="card-text text-why-us">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                  lain</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 mb-3">
            <div className="card ms-3 additional-card">
              <img src="images/icon_24hrs.png" className="card-img-top img-card mt-3 ms-3" alt="sip" />
              <div className="card-body">
                <h5 className="card-title title-why-us">Layanan 24 Jam</h5>
                <p className="card-text text-why-us">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                  akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 mb-3">
            <div className="card ms-3 additional-card">
              <img src="images/icon_professional.png" className="card-img-top img-card mt-3 ms-3" alt="sip" />
              <div className="card-body">
                <h5 className="card-title title-why-us">Sopir Profesional</h5>
                <p className="card-text text-why-us">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                  waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;