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

    // return(
    //   <>
    //     <section id="search">
    //       <form onSubmit={this.handleSubmit}>
    //           <div className="container px-lg-5">
    //             <div className="row">
    //               <div className="d-lg-flex py-4 px-3 rounded-3 shadow bg-white">
    //                       <div className="col mt-2">
    //                           <label className="label">Tipe Driver</label>
    //                           <select className="form-select" id="tipe-driver" name="tipedriver" value={this.state.value} onChange={this.handleChange} style={{width: '95%'}}>
    //                             <option value="">Pilih Tipe Driver</option>
    //                             <option value="true">Dengan Sopir</option>
    //                             <option value="false">Tanpa Sopir (Lepas Tangan)</option>
    //                           </select>
    //                       </div>
    //                       <div className="col mt-2">
    //                         <label className="label">Tanggal</label>
    //                         <div className="input-group" style={{width: '95%'}}>
    //                           <input type="date" name="tanggal" value={this.state.tanggal} onChange={this.handleChange} className="form-control" id="select-tanggal" placeholder="Pilih Tanggal"/>
    //                         </div>
    //                       </div>
    //                       <div className="col mt-2">
    //                         <label className="label">Waktu Jemput/Ambil</label>
    //                         <div className="input-group" style={{width: '95%'}}>
    //                           <input type="time" name="waktu" value={this.state.waktu} onChange={this.handleChange} id="select-jam" className="form-control" placeholder="Pilih Tanggal"/>
    //                         </div>
    //                       </div>

    //                       <div className="col mt-2">
    //                         <label className="label">Jumlah Penumpang</label>
    //                         <div className="input-group" style={{width: '95%'}}>
    //                           <input type="text" id="select-jml" value={this.state.jumlahpenumpang} onChange={this.handleChange} name="jumlahpenumpang" className="form-control" placeholder="Jumlah Penumpang"/>
    //                         </div>
    //                       </div>
    //                       <div>
    //                         <div className="col">
    //                           <button className="btn btn-sm btn-success p-2  my-4 mx-3" id="load-btn" name="submit"> Cari Mobil</button>
    //                           <button className="btn btn-sm btn-outline-danger p-2 my-4 mx-3" onClick={refreshPage} id="clear-btn"> Clear Mobil</button>
    //                         </div>
    //                       </div>
    //               </div>
    //             </div>    
    //           </div>
    //       </form>
    //   </section>

    //   <ListCars submit={this.handleSubmit} data={this.data} jumlahpenumpang={this.state.jumlahpenumpang} tipedriver={this.state.tipedriver} tanggal={this.state.tanggal} waktu={this.state.waktu}/>

    // </>
    // )
    // }
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