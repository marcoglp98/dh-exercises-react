import React from "react";
import { Age } from "./Age";

export function Welcome() {
  return (
    <div>
      <p>Welcome, {<strong>{this.props.name}</strong>}!</p>
      <Age age={24} />
    </div>
  );
}
