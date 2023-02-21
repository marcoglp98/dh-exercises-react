import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  HandleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.HandleChange}
        ></input>
        <Welcome name={this.state.username} />
      </div>
    );
  }
}
