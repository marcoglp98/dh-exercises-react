import React from "react";

export class TodoList extends React.Component {
  state = {
    todo: ["Be born", "Live", "Die"],
    value: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      todo: [...prevState.todo, prevState.value],
      value: "",
    }));
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleClear = () => {
    this.setState({ todo: [], value: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="todo"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          <button onClick={this.handleClear}>Clear</button>
        </form>
        <ul>
          {this.state.todo.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}
