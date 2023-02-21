import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    checkbox: false,
  };

  handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    const { username, password } = this.state;
    const isDisabled = !username || !password;
    return (
      <div>
        <form>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={this.handleChange}
            defaultValue=""
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
            defaultValue=""
          />
          <input name="check" type="checkbox" onChange={this.handleChange} />
          <button
            disabled={isDisabled}
            onClick={(event) => this.handleSubmit(event)}
          >
            Submit
          </button>
          <button type="reset">Clear</button>
        </form>
      </div>
    );
  }
}
