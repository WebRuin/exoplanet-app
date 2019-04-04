import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Options from "./components/Options";
import * as d3 from "d3";
import csvData from "./data/phl_hec_all_confirmed.csv";

const AppBody = styled.div`
  display: flex;
  justify-content: space-around;
`;

class App extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    Promise.all([d3.csv(csvData)])
      .then(([data]) => {
        // set state with exoplanet data
        this.setState({ data: this.state.data.concat(data) });
      })
      .then(() => {
        console.log(this.state.data);
      })
      .catch(err => console.log("Error loading or parsing data."));
  }

  render() {
    return (
      <>
        <Nav>
          <h1>Exoplanet Data Explorer</h1>
        </Nav>
        <AppBody>
          <Options data={this.state.data}>
            <h2>X Axis</h2>
          </Options>
          <Options data={this.state.data}>
            <h2>Y Axis</h2>
          </Options>
        </AppBody>
      </>
    );
  }
}

export default App;
