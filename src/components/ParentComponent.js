import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: "Parent"
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  ClickHandler(childName) {
    this.setState({
      parent: "Hello All"
    });
    console.log(childName);
  }

  render() {
    return (
      <div>
        <div>Status: {this.state.parent}</div>
        <ChildComponent methodname={this.ClickHandler} />
      </div>
    );
  }
}
export default ParentComponent;
