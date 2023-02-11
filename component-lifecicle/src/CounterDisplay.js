import React from "react";

export class CounterDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.display}</h1>
      </div>
    );
  }
}
