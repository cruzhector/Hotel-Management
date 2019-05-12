import React, { Component } from "react";
const roomTypes = [
  {
    type: "Presedential"
  },
  {
    type: "Deluxe"
  },
  {
    type: "Camp"
  }
];
class Select extends Component {
  state = {};
  render() {
    return (
      <select name="" id="room" className="form-control">
        {roomTypes.map((types, i) => (
          <option key={i} value={types.type}>
            {types.type}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
