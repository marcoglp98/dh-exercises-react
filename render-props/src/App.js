import React from "react";
import TodoList from './TodoList';

export class App extends React.Component {
    render() {
        return (
            <TodoList
            render={(todo, handleRemove) => (
              <ul>
                {todo.map((todo) => {
                  return (
                    <li key={todo.id}>
                      {todo.value}
                      <button onClick={() => handleRemove(todo.id)}>Remove</button>
                    </li>
                  );
                })}
              </ul>
            )}
          />
          
        )
    }
}
