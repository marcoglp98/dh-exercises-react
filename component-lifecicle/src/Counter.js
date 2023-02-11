import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.incrementBy,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <CounterDisplay display={this.state.count} />;
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incrementBy: 1,
  timeOut: 1000,
};
