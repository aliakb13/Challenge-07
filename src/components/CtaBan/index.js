import { Link } from 'react-router-dom'

function CtaBan() {
  return (
    <div className="container text-center cta-banner">
      <p className="cta-head">Sewa Mobil di Jakarta Sekarang</p>
      <p className="cta-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut
        labore et dolore
        magna aliqua. </p>
      <Link to='/cari' className="btn btn-success cta-btn" type="submit" style={{ backgroundColor: '#5CB85F' }}>Mulai
        Sewa
        Mobil</Link>
    </div>
  );
}

export default CtaBan;