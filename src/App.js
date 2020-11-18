import './App.css';
import React, { Component } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import AvailKits from "./components/AvailKits";

import axios from "axios";
import FinishedProj from './components/FinishedProj';

class App extends Component {
  constructor () {
    super();

    this.state = {
      kits: [],
    }
  }

  componentDidMount() {
    axios.get("/api/watercolor")
      .then(res => this.setState({ kits: res.data }))
      .catch(err => console.log(err))
  }

  addToProj = id => {
    axios.post(`/api/watercolor/${id}`)
      .then(res => this.setState({ kits: res.data }))
      .catch(err => console.log(err))
  }

  deleteProj = (index) => {
    axios.delete(`/api/watercolor/${index}`)
      .then(res => this.setState({ kits: res.data }))
      .catch(err => console.log(err));
  };

  editProj = (index, datePainted) => {
    axios.put(`/api/team/${index}`, { datePainted })
      .then(res => this.setState({ kits: res.data }))
      .catch(err => console.log(err))
  };

  render() {
    console.log(this.state.kits)
    return (
      <div>
        <Header />
        <main className="main-box">
          <Gallery addToProj={this.addToProj} />
          {/* <AvailKits
          kits={this.state.kits}
          deleteProj={this.deleteProj}
          datePainted={this.datePainted}
          /> */}
        </main>
      </div>
    );
  }
}

export default App;