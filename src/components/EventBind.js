import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messgae: "Hello"
    };
  }

  render() {
    return (
      <div>
        <div>Status: {this.state.messgae}</div>
        <button>Display Status</button>
      </div>
    );
  }
}
export default EventBind;
