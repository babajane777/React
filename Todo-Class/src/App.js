import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default function App() {
 
    return (
      <div className="App">
        <span>Todo</span>
        <Form />
        {/* <List /> */}
      </div>
    );
}
