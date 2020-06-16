import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <h1 className="Home__h1">Welcome to Music Store</h1>
          <div className="Home__container">
            <p className="Home__text Home__typewrite">
              find your favourite music
            </p>
          </div>
        </div>
    );
  }
}

export default Home;
