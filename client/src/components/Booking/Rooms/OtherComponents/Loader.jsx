import React, { Component } from "react";
import { PulseLoader } from "react-spinners";
class Loader extends Component {
  state = { isLoading: this.props.isLoading };
  componentWillReceiveProps = newProps => {
    console.log("Loader new Props", newProps);
    this.setState({ isLoading: newProps.isLoading });
  };
  render() {
    console.log("Loader props", this.props);
    return (
      <center>
        <PulseLoader
          sizeUnit={"px"}
          heightUnit={"px"}
          widthUnit={"px"}
          color={"#a5cad2"}
          size={10}
          height={15}
          width={5}
          radius={5}
          margin="2px"
          loading={this.state.isLoading}
        />
      </center>
    );
  }
}

export default Loader;
