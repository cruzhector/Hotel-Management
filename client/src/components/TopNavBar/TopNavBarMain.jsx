import React, { Component } from "react";
class TopNavBarMain extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder={"Search"}
            />
          </div>
        </form>
      </nav>
    );
  }
}

export default TopNavBarMain;
