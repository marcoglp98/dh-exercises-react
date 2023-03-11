import React from "react";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Marco" age={24} />
        <Sum/>
      </div>
    );
  }
}
