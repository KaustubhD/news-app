import React, { Component } from "react";

import Nav from "./nav";
import Listie from "./listie";

const getSources = () => {
  return fetch(
    `https://newsapi.org/v2/sources?language=en&country=us&apiKey=${
      process.env.API_KEY
    }`
  )
    .then(resp => resp.json())
    .then(res => res.sources);
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      source: "",
      sourceArray: [],
      width: 0,
      height: 0
    };
    getSources().then(sArray => this.setState({ sourceArray: sArray }));
  }

  updateDimensions = () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    this.setState({ width, height });
  };

  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions());
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions());
  }

  updateSearchFIlter = term => {
    this.setState({ source: term });
  };

  render() {
    return (
      <div>
        <Nav changeFunc={this.updateSearchFIlter} />
        <Listie state={this.state} />
      </div>
    );
  }
}

export default Home;
