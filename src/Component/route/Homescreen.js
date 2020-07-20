import React, { Component } from "react";
import Dashboard from "../dashboard/dashboard";
import Navbar from "../Layout/Navbar";

class Homescreen extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Dashboard />
      </>
    );
  }
}

export default Homescreen;
