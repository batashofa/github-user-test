import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { useState } from "react";
import React from "react";
import SearchPage from "./components/initial-state/initial";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div className="App">
        <Header value={(a) => this.setState({ value: a })} />
        {this.state.value ? <Main search={this.state.value} /> : <SearchPage />}
      </div>
    );
  }
}

export default App;
