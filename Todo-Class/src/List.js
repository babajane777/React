import {useState} from 'react';
import { Todo } from "./Todo";

export function List({todos, deletetodo}) {
  
  return (
    <div className="list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={() => {deletetodo(todo.id)}}/>
      ))}
    </div>
  );
}

