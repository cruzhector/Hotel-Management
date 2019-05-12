import React, { Component } from "react";
// import AvailabileRooms from "./AvailableRooms";
import Select from "react-select";
const sum = [1, 2, 3].reduce((partial_sum, a) => partial_sum + a,0); 
class Availability extends Component {
  state = {
    availableRoomsData: this.props.availableRoomsData,
    errorMessage: this.props.errorMessage,
    selectedRooms: null
  };

  //new props
  componentWillReceiveProps = newProps => {
    this.setState({
      availableRoomsData: newProps.availableRoomsData,
      errorMessage: newProps.errorMessage
    });
  };

  //onChange Select listener
  handleChange = selectedRooms => {
    this.setState({ selectedRooms: selectedRooms });
    console.log(`Option selected:`, selectedRooms);
    console.log(this.state.selectedRooms);
  };

  render() {
    console.log("Available", this.state);
    const { availableRoomsData, selectedRooms } = this.state;

    //constructing options string for display
    let selectRoomsValue = [];
    availableRoomsData.forEach(element => {
      let valueElement = {
        value: element.roomnumber,
        label: `${element.roomnumber} (${element.accommodation} guests)`,
        guests: element.accommodation
      };
      selectRoomsValue.push(valueElement);
    });
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Room Availability
          </h6>
        </div>
        <div className="card-body">
          {this.state.errorMessage ? (
            <center>{this.state.errorMessage}</center>
          ) : (
            <div>
              <p>Choose Rooms From Here</p>
              <Select
                value={selectedRooms}
                onChange={this.handleChange}
                isMulti
                isSearchable
                options={selectRoomsValue}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Availability;
