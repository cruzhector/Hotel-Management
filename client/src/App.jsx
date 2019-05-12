import React, { Component } from "react";
import SideNavBarMain from "./components/SideNavBar/SideNavBarMain";
import TopNavBarMain from "./components/TopNavBar/TopNavBarMain";
import Rooms from "./components/Booking/Rooms/Rooms";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <SideNavBarMain />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopNavBarMain />
            <div className="container-fluid">
              <Rooms />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
