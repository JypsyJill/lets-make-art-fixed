import './App.css';
import React, { Component } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import AvailKits from "./components/AvailKits";
import axios from "axios";

class App extends Component {
  constructor () {
    super();

    this.state = {
      kits: [],
      finishedKits: []
    }
  }

  componentDidMount() {
    axios.get("/api/kits")
    .then(res => this.setState({ kits: res.data.kits, finishedKits: res.data.completedProjects}))
    .catch(err => console.log(err))
  }

  addToProj = id => {
    const currentDate = new Date()
    const date = `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`

    axios.post(`/api/watercolor/${id}`, {date})
      .then(res => this.setState({ kits: res.data.kits, finishedKits: res.data.completedProjects }))
      .catch(err => console.log(err))
  }

  deleteProj = id => {
    axios.delete(`/api/watercolor/${id}`)
      .then(res => this.setState({ kits: res.data }))
      .catch(err => console.log(err));
  };

  editProj = (id, datePainted, img) => {
    axios.put(`/api/watercolor/${id}`, { datePainted, img })
      .then(res => this.setState({ finishedKits: res.data }))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <Header />
        <main className="main-box">
          <Gallery kits={this.state.kits} addToProj={this.addToProj} />
          <AvailKits
          finishedKits={this.state.finishedKits}
          deleteProj={this.deleteProj}
          editProj={this.editProj}
          />
        </main>
      </div>
    );
  }
}

export default App;