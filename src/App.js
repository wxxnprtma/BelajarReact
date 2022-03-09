import React, { Component } from 'react';
import './App.css';
import Media from './Components/Media';// import element Media yang telah dibuat
import Alert from './Components/Alert';// import element Alert yang telah dibuat 

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "success",
      header: "React JS itu..",
      content: "seru dan menyenangkan bukan?BUKAN!!"
    }
  }

  // fungsi untuk mengubah tipe  
  changeTypeAlert = (event) => {
    this.setState({ type: event.target.value });
  }
  // fungsi untuk mengubah header  
  changeHeaderAlert = (event) => {
    this.setState({ header: event.target.value });
  }
  // fungsi untuk mengubah content  
  changeContentAlert = (event) => {
    this.setState({ content: event.target.value });
  }

  render() {
    // berada pada function render
    return (
      <div>

        <div className="App container col-sm-6 ">
          <h3>Ini Project Pertama React JS</h3>
          <p>Belajar React JS itu mudah bukan?BUKAN!!</p>
        </div>

        <div className="App">
          <h3 className="judul">Ini Project Pertama React JS</h3>
          <p className="subJudul">Belajar React JS itu mudah bukan?BUKAN!!</p>
        </div>

        <div className="App container">
          <div className="alert alert-info">
            <h3 className="text-danger">Ini Project Pertama React JS</h3>
            <p>Belajar React JS itu mudah bukan?</p>
            <button className="mr-1 btn btn-success">BUKAN!!</button>
            <button className="btn btn-info">BUKAN!!</button>
          </div>
        </div>

        <div className="App container col-sm-6">
          <Alert type="success" header="INGFO">
            Belajar React JS itu menyenangkan bukan?BUKAN!!
          </Alert>
          <Alert type="success" header="INGFO">
            Belajar React JS itu menyenangkan bukan?BUKAN!!
          </Alert>
          <Alert type="success" header="INGFO">
            Belajar React JS itu menyenangkan bukan?BUKAN!!
          </Alert>

          <Alert type="danger" header="Fatal Error">
            Ini adalah alert dengan tipe danger
          </Alert>
          <Alert type="success" header="Berhasil">
            Ini adalah alert dengan tipe success
          </Alert>
          <Alert type="warning" header="Warning">
            Ini adalah alert dengan tipe warning
          </Alert>
        </div>

        <div className="media my-3">
          <Media image="Chelsea.png" title="Chelsea">
            Chelsea Football Club adalah sebuah klub sepak bola
            yang bermarkas di Fulham, London. Didirikan pada 1905,
            klub ini kini berkompetisi di Liga Utama Inggris dan
            memainkan pertandingan kandang mereka di Stamford Bridge.
          </Media>

          <Media image="MU.png" title="Manchester United">
            Manchester United Football Club adalah sebuah klub sepak bola profesional
            yang berbasis di Old Trafford, Manchester Raya, yang bermain di Liga Inggris
            dengan piala EPL terbanyak di inggris. Tapi sekarang gak pernah juara lagi sejak tahun 2017.
          </Media>
        </div>

        <div className="App container col-sm-6">
          <Alert type={this.state.type} header={this.state.header}>
            {this.state.content}
          </Alert>
          <hr />
          <h4>Alert Control</h4>
          <b className="text-left">Tipe Alert</b>
          <select className="form-control" name="type" value={this.state.type}
            onChange={this.changeTypeAlert}>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
            <option value="info">Info</option>
          </select>
          <b className="text-left">Header Alert</b>
          <input
            type="text" name="header" className="form-control" value={this.state.header}
            onChange={this.changeHeaderAlert} />
          <b className="text-left">Content Alert</b>
          <input
            type="text" name="content" className="form-control" value={this.state.content}
            onChange={this.changeContentAlert} />

        </div>
      </div>
    );
  }
}

export default App; 
