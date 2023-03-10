import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {<strong>{this.props.name}</strong>}!</p>
        {this.props.age && this.props.name === "John" && (
          <Age age={this.props.age} />
        )}
      </div>
    );
  }
}
