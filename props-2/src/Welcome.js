import React from "react";

export class Welcome extends React.Component {
  static defaultProps = {
    name: "...",
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
      </div>
    );
  }
}
