import React, { Component } from "react";

class Options extends Component {
  render() {
    const props = this.props;
    console.log(props.data[0]);
    const colNames = Object.keys(props.data[0] || {});
    const selectOptions = colNames.map((col, i) => {
      return (
        <option key={i} value={i}>
          {col}
        </option>
      );
    });
    return (
      <form>
        {props.children}
        <select>{selectOptions}</select>
      </form>
    );
  }
}

export default Options;
