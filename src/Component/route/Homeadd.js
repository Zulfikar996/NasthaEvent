import React, { Component } from "react";
import AddEvent from "../addEvent/addEvent";
import Navbar from '../Layout/Navbar'
class Homeadd extends Component {
  render() {
    return (
      <>
        <Navbar />
        <AddEvent />
      </>
    );
  }
}

export default Homeadd;
