import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  render() {
    return (
      <div className="list">
        {this.state.todos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </div>
    );
  }
}
