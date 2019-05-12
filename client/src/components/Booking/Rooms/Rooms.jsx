import React, { Component } from "react";
import BookingDetails from "./BookingDetails";
import Availability from "./Availability";
import Loader from "./OtherComponents/Loader";

class Rooms extends Component {
  state = {
    isLoading: false,
    availableRoomsData: undefined,
    errorMessage: null
  };

  getAvailableDataWithDates = (startDate, endDate) => {
    console.log("Main Rooms", startDate);
    console.log("Main Rooms", endDate);
    let requestData = {
      startDate: startDate.toString(),
      endDate: endDate.toString()
    };
    console.log("Rooms", requestData);
    //fetch Data with dates from database
    this.setState({
      isLoading: true
    });
    fetch("/api/availablerooms", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(requestData)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        //   let roomsData=data.availableRoomsData
        //   let selectRoomsValue=[]
        // //   if(roomsData!=null){
        //   roomsData.forEach(element => {
        //     let concatData=`${element.roomnumber} (${element.accommodation} guests)`
        //     selectRoomsValue.push(concatData)
        //   });
        // }
        this.setState({
          isLoading: false,
          availableRoomsData: data.availableRoomsData,
          errorMessage: data.errorMessage
        });
        console.log(data);
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          availableRoomsData: [],
          errorMessage: "Unable to fetch data try after some time"
        });
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <BookingDetails getDates={this.getAvailableDataWithDates} />
        </div>
        <div className="col-xl-4 col-lg-5">
          {this.state.isLoading || !this.state.availableRoomsData ? (
            <Loader isLoading={this.state.isLoading} />
          ) : (
            <Availability
              availableRoomsData={this.state.availableRoomsData}
              errorMessage={this.state.errorMessage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Rooms;
