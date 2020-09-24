import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messgae: "Hello"
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  ClickHandler() {
    this.setState({
      messgae: "Hello All"
    });
  }
  ClickHAndlerClass = () => {
    this.setState({
      messgae: "Hello All Class"
    });
  };
  render() {
    return (
      <div>
        <div>Status: {this.state.messgae}</div>
        <button onClick={this.ClickHandler.bind(this)}>Display Status</button>
        <button onClick={() => this.ClickHandler()}>
          Display Arrow Status
        </button>
        <button onClick={this.ClickHandler}>3rd Display</button>
        <button onClick={this.ClickHAndlerClass}>4th Display</button>
      </div>
    );
  }
}
export default EventBind;
