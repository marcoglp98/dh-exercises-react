import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={20} incrementBy={4} timeOut={2000} />
      </div>
    );
  }
}
