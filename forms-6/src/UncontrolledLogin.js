import React from "react";

export class UncontrolledLogin extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            autoFocus
            name="username"
            type="text"
            placeholder="username"
            defaultValue=""
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            defaultValue=""
          />
          <input name="check" type="checkbox" />
          <button>Submit</button>
          <button type="reset">Clear</button>
        </form>
      </div>
    );
  }
}
