import React, { Component } from "react";
import "../addEvent/style.css";
import { postEvent } from "../redux/actions/event";
import { connect } from "react-redux";
import Done from "../../assets/img/146.png";
import NumberFormat from "react-number-format";
import { withRouter } from "react-router-dom";
class AddEvent extends Component {
  state = {
    title: "",
    location: "",
    participant: "",
    date: "",
    note: "",
    image: "",
    success: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onButton = () => {
    this.setState({
      success: true,
    });
    this.props.history.push("/Dashboard");
  };

  offButton = () => {
    this.setState({
      success: true,
    });
  };

  onChangeImageHandler = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("title", this.state.title);
    data.append("location", this.state.location);
    data.append("participant", this.state.participant);
    data.append("date", this.state.date);
    data.append("note", this.state.note);
    data.append("image", this.state.image);

    this.props.dispatch(postEvent(data));
  };

  render() {
    const { status, isLoading } = this.props;
    const { title, location, participant, date, note } = this.state;
    return (
      <div className="whole justify-content-center align-items-center d-flex">
        <div className="row some">
          <div className="col-lg-6  pt-4 pl-3 pr-3 bgcard">
            {status === 200 && this.state.success === false ? (
              <div>
                <div className="justify-content-center align-items-center d-flex">
                  <img src={Done} alt="imagesuccess" id="Done" />
                </div>
                <div>
                  <div>
                    {status === 200 ? (
                      <h3 className="text-center">Event has been added</h3>
                    ) : (
                      <h3 className="text-center">ADD Event</h3>
                    )}
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => this.offButton(this.state.success)}
                    >
                      Add Event
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.onButton(this.state.success)}
                    >
                      Go to card
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="mt-1">
                  <form>
                    <div className="row">
                      <div className="col">
                        {title === "" ? (
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              name="title"
                              onChange={this.onChange}
                              placeholder="title"
                            />
                            <div className="errortext text-center mt-1">
                              Field Don't Empty
                            </div>
                          </div>
                        ) : (
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              name="title"
                              onChange={this.onChange}
                              placeholder="title"
                            />
                          </div>
                        )}
                      </div>
                      <div className="col">
                        {location === "" ? (
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              name="location"
                              onChange={this.onChange}
                              placeholder="location"
                            />
                            <div className="errortext text-center mt-1">
                              Field Don't Empty
                            </div>
                          </div>
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            name="location"
                            onChange={this.onChange}
                            placeholder="location"
                          />
                        )}
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        {participant === "" ? (
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              name="participant"
                              onChange={this.onChange}
                              placeholder="participant"
                            />
                            <div className="errortext text-center mt-1">
                              Field Don't Empty
                            </div>
                          </div>
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            name="participant"
                            onChange={this.onChange}
                            placeholder="participant"
                          />
                        )}
                      </div>
                      <div className="col">
                        {date === "" ? (
                          <div>
                            <NumberFormat
                              className="numberformat"
                              onChange={this.onChange}
                              name="date"
                              format="##/##/####"
                              placeholder="DD/MM/YY"
                              mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                            />
                            <div className="errortext text-center mt-1">
                              Field Don't Empty
                            </div>
                          </div>
                        ) : (
                          <NumberFormat
                            className="numberformat"
                            onChange={this.onChange}
                            name="date"
                            format="##/##/####"
                            placeholder="DD/MM/YY"
                            mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                          />
                        )}
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        {note === "" && note.length <= 50 ? (
                          <div>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              col="44"
                              placeholder="note .."
                              name="note"
                              onChange={this.onChange}
                            ></textarea>
                            <div className="errortext text-center mt-1">
                              Field Don't Empty
                            </div>
                          </div>
                        ) : (
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            col="44"
                            placeholder="note .."
                            name="note"
                            onChange={this.onChange}
                          ></textarea>
                        )}
                      </div>
                    </div>
                    <div className="custom-file mt-2">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="validatedCustomFile"
                        name="image"
                        onChange={this.onChangeImageHandler}
                        required
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="validatedCustomFile"
                      >
                        Choose file...
                      </label>
                      <div className="invalid-feedback">
                        Example invalid custom file feedback
                      </div>
                    </div>
                  </form>
                  <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => this.onButton(this.state.success)}
                    >
                      Cancel
                    </button>
                    {isLoading ? (
                      <button className="btn btn-primary ">
                        <span class="spinner-border spinner-border-sm"></span>
                      </button>
                    ) : note.length <= 50 ? (
                      <button
                        className="btn btn-primary"
                        onClick={this.onSubmit}
                        disabled
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={this.onSubmit}
                      >
                        Save
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-6 e00bg1"></div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    status: state.event.statusCard,
    isLoading: state.event.isLoading,
  };
};

export default withRouter(connect(mapStatetoProps)(AddEvent));
