import ListCars from "../ListCars"
import * as React from 'react';

function refreshPage() {
  window.location.reload()
}

class Cari extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = { tipedriver: '', jumlahpenumpang: '', tanggal: '', waktu: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.Hapus = this.Hapus.bind(this)
    this.data = this.data.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log(this.state.tipedriver);
    console.log(this.state.jumlahpenumpang);
    console.log(this.state.tanggal);
    console.log(this.state.waktu);
  }

  Hapus() {
    return 2
  }

  data(event) {
    event.preventDefault()
    const jumlahpenumpang = this.state.jumlahpenumpang
    console.log("Jumlah : " + jumlahpenumpang);
    const data1 = [this.state.jumlahpenumpang, this.state.tipedriver, this.state.tanggal, this.state.waktu]

    return data1
  }

  render() {
    return (
      <>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="">Tipe Driver</label>
                <div className="input-group mb-3">
                  <select className="form-select" id="tipe-driver" name="tipedriver" value={this.state.value} onChange={this.handleChange}>
                    <option value="">Pilih Tipe Driver</option>
                    <option value="true">Dengan Sopir</option>
                    <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="">Tanggal</label>
                <div className="input-group mb-3">
                  <input type="date" className="form-control" name="tanggal" value={this.state.tanggal} onChange={this.handleChange} id="select-tanggal" />
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="">Waktu Jemput/Ambil</label>
                <div className="input-group mb-3">
                  <input id="select-jam" type="time" className="form-control" value={this.state.waktu} onChange={this.handleChange} name="waktu" />
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="">Jumlah Penumpang (optional)</label>
                <div className="input-group mb-3">
                  <input id="select-jml" type="number" name="jumlahpenumpang" className="form-control" placeholder="Jumlah Penumpang" min="0" max="10" value={this.state.jumlahpenumpang} onChange={this.handleChange} />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-2">
                  <div className="d-grid gap-2">
                    <button id="load-btn" type="button" className="btn btn-success">Cari Mobil</button>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-grid gap-2">
                    <button id="clear-btn" type="button" className="btn btn-danger" onClick={refreshPage}>Clear</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <ListCars submit={this.handleSubmit} data={this.data} jumlahpenumpang={this.state.jumlahpenumpang} tipedriver={this.state.tipedriver} tanggal={this.state.tanggal} waktu={this.state.waktu} />

      </>

    );
  }
}
export default Cari;