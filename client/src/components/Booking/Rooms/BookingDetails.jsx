import React, { Component } from "react";
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";
import moment from "moment";
// import Select from "./FormComponents/Select";

//constants for DateTimeRangeContainer
const now = new Date();
const local = {
  format: "DD-MM-YYYY HH:mm:ss",
  sundayFirst: false
};

class BookingDetails extends Component {
  state = {
    start: moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0)
    ),
    end: moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0)
    )
      .add(1, "days")
      .subtract(1, "seconds")
  };

  //Capture Dates Here (DateTimeRangeContainer Callback)
  applyCallback = (startDate, endDate) => {
    console.log("Booking Details", startDate);
    console.log("Booking Details", endDate);

    //send dates as props to Rooms Components
    this.props.getDates(
      moment(startDate).format("MM/DD/YYYY HH:mm:ss"),
      moment(endDate).format("MM/DD/YYYY HH:mm:ss")
    );
  };

  render() {
    //Set Ranges
    const ranges = {
      "Today Only": [moment(this.state.start), moment(this.state.end)],
      "Yesterday Only": [
        moment(this.state.start).subtract(1, "days"),
        moment(this.state.end).subtract(1, "days")
      ],
      "3 Days": [
        moment(this.state.start).subtract(3, "days"),
        moment(this.state.end)
      ]
    };
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Booking Details</h6>
        </div>
        <div className="card-body">
          <form action="#" method="post">
            <div className="row">
              {/* <div className="col-sm-6 form-group">
                <label htmlFor="">Room Type</label>
                <div style={{ position: "relative" }}>
                  <Select />
                </div>
              </div> */}
              <div className="col-md-6 form-group">
                <label htmlFor="guests">Guests</label>
                <input
                  type="text"
                  name="guests"
                  id="guests"
                  className="form-control"
                />
              </div>

              <div className="col-sm-6 form-group">
                <label htmlFor="">Vacation Date</label>
                <div style={{ position: "relative" }}>
                  <span
                    className="fa fa-calendar icon"
                    style={{ position: "relative", right: 10, top: 10 }}
                  />
                  <DateTimeRangeContainer
                    start={this.state.start}
                    end={this.state.end}
                    local={local}
                    applyCallback={this.applyCallback}
                    ranges={ranges}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="departure_date"
                    />
                  </DateTimeRangeContainer>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="city">Name</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="state">Email</label>
                <input
                  type="email"
                  name="state"
                  id="state"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="city">Mobile</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="state">City</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="message">Write a Note</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control "
                  cols="20"
                  rows="6"
                />
              </div>
            </div>
            <div className="row" style={{ float: "right" }}>
              <div className="col-md-6 form-group">
                <input
                  type="submit"
                  value="Reserve Now"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingDetails;
