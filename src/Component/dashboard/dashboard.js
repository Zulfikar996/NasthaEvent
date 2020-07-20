import React, { Component } from 'react';
import '../dashboard/style.css'
import { getEventLimit, getSearch, paginationProduct } from '../redux/actions/event'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    state = {
        name: ''
    }
    getEvent = async (event) => {
        await this.props.dispatch(getEventLimit())
    }

    paginationProduct = async (event) => {
        await this.props.dispatch(paginationProduct(event.target.id))
    }

    getSearch = async (event) => {
        this.setState({
            name: event.target.value
        })
        await this.props.dispatch(getSearch(event.target.value))
    }

    componentDidMount() {
        this.getEvent();
    }

    render() {
        const { event, pagination, isLoading } = this.props
        return (
            <div className="background">
                <div className="searchinput pt-5">
                    <i className="fa fa-search"></i>
                    <input placeholder="Search" onChange={this.getSearch} className="search" />
                </div>
                <div className="container-fluid pt-3 ">
                    <div className="mt-3 container">
                        <div className="tablesdas">
                            {isLoading ? (
                                <div className="text-center mt-5">
                                    <div className="spinner-border"></div> Please Wait
                                </div>
                            ) : (
                                    <table className="table table-responsive-lg">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Participant</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Note</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {event.map((item, index) =>
                                                <tr key={index}>
                                                    <th className="isi"  scope="row">{item.id}</th>
                                                    <td className="isi" >{item.title}</td>
                                                    <td className="isi" >{item.location}</td>
                                                    <td className="isi" >{item.participant}</td>
                                                    <td className="isi" >{item.date.slice(0, 10)}</td>
                                                    <td className="isi" >{item.note}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                )}
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination" style={{ marginLeft: "50px" }}>
                            {this.props.pagination && pagination.map((pagination) => (
                                <li className="page-item" key={pagination}>
                                    <Link className="page-link" onClick={this.paginationProduct} id={pagination} to=''>{pagination}</Link>
                                </li>
                            ))}

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        event: state.event.eventlimit,
        pagination: state.event.pagination,
        isLoading: state.event.isLoading
    }
}

export default connect(mapStatetoProps)(Dashboard);