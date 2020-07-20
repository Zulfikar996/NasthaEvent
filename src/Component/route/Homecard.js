import React, { Component } from 'react'
import Navbar from '../Layout/Navbar'
import CardEvent from '../cardView/card'
class Homecard extends Component {
    render() {
        return (
            <>
                <Navbar />
                <CardEvent />
            </>
        )
    }
}

export default Homecard