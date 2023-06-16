import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here

  // create handleAdd and handleRemove functions here

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form />
        <List />
      </div>
    );
  }
}
