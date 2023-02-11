import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={1} incrementBy={1} timeOut={2000} />
      </div>
    );
  }
}
