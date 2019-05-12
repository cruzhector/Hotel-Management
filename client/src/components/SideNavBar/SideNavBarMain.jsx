import React, { Component } from "react";
class SideNavBarMain extends Component {
  state = {};
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-text mx-3">Hotel Admin</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <span>Notifications</span>
          </a>
        </li>
        <hr className="sidebar-divider my-0" />

        <div className="sidebar-heading">Booking</div>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <span>Room</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ marginTop: 0, paddingTop: 0 }}
            href="/"
          >
            <span>Event</span>
          </a>
        </li>
        <hr className="sidebar-divider my-0" />
        <div className="sidebar-heading">Others</div>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <span>Reception</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ marginTop: 0, paddingTop: 0 }}
            href="/"
          >
            <span>Calendar</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ marginTop: 0, paddingTop: 0 }}
            href="/"
          >
            <span>FoodMenu</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default SideNavBarMain;
