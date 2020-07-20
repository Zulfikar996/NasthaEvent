import React, { Component } from 'react';
import '../cardView/style.css'
import { connect } from 'react-redux'
import { getEvent } from '../../Component/redux/actions/event'

class CardView extends Component {

    getEvent = async () => {
        await this.props.dispatch(getEvent())
    }

    async componentDidMount() {
        await this.getEvent();
    }

    render() {
        console.log(this.props)
        const { getEvent, isLoading } = this.props
        return (
            <div className="bgCard">
                <div className="p-5 row container-fluid">
                    <div className="col-lg-12 ">
                        {isLoading ? (
                            <div className="text-center mt-5">
                                <div className="spinner-border"></div>Loading ..
                            </div>
                        ) : (
                                <div className="d-flex flex-row card000">
                                    {
                                        getEvent.map((item, index) => (
                                            <div className=" card001" key={index}>
                                                <div className="imgaesi">
                                                    <img src={item.image} alt="images" className="cardimage" />
                                                </div>
                                                <div className="d-flex flex-row location">
                                                    <i className="mt-2 pl-3 fa fa-map-marker" aria-hidden="true"></i>
                                                    <p>{item.location}</p>
                                                </div>
                                                <div className="card002">
                                                    <h4 className="ml-3">{item.title}</h4>
                                                    <small className="ml-3 title">{item.date.slice(0, 10)}</small>
                                                </div>
                                                <div>
                                                    <div className="card003">
                                                        <i className="fa fa-user ml-3 mt-2" aria-hidden="true"></i>
                                                        <span className="ml-3">{item.participant}</span>
                                                    </div>
                                                </div>
                                                <div className="ml-3 note">
                                                    <small>Note :</small>
                                                    <p>{item.note.slice(0,30)} . . . </p>
                                                </div>
                                            </div>)
                                        )
                                    }
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        getEvent: state.event.event,
        isLoading: state.event.isLoading
    }
}

export default connect(mapStatetoProps)(CardView);