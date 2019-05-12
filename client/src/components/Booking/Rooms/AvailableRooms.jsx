import React, { Component } from "react";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
class AvailableRooms extends Component {
  state = {
    selectedRooms: null
  };
  componentWillReceiveProps = newProps => {
    console.log("avaiable rooms", newProps);
  };
  handleChange = selectedRooms => {
    this.setState({ selectedRooms: selectedRooms });
    console.log(`Option selected:`, selectedRooms);
  };
  render() {
    const { selectedRooms } = this.state;
    return (
      <Select
        value={selectedRooms}
        onChange={this.handleChange}
        isMulti
        options={options}
      />
    );
  }
}

export default AvailableRooms;
