import React, { Component } from "react";
import SimpleCard from "./simplecard";
import Nav from "./nav";

function getNews(id = "abc-news") {
  return fetch(
    `https://newsapi.org/v2/everything?sources=${id}&apiKey=${
      process.env.API_KEY
    }`
  )
    .then(resp => resp.json())
    .then(res => res.articles);
}

class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    };
    getNews(this.state.id).then(arts => this.setState({ arts }));
  }

  render() {
    return (
      <div>
        <Nav />
        <div class="cards">
          {this.state.arts &&
            this.state.arts.map(news => <SimpleCard news={news} />)}
        </div>
      </div>
    );
  }
}

export default Source;
