import './styles.css';
import { useState } from 'react';
import {List} from './List';

export function Form() {
  const [todoArray, setTodoArray] = useState([]);
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleTodo = () => {
    let newtodo ={id:todoArray.length + 1, todo:value}
    setTodoArray([newtodo, ...todoArray]);
    setValue('');
  }

  const handleDelete = (id) => {
    console.log(id)
    let filteredArray = todoArray.filter((todo) => todo.id !== id);
    setTodoArray(filteredArray);
  }
  
  return (
    <>
    <div className="form">
      <input
        onChange={(e)=>{handleChange(e)}}
        value={value}
        placeholder="Whats on your mind?"
        required
      />
      <button onClick = {handleTodo} >Add</button>
    </div>
    <div>
     <List todos={todoArray} deletetodo={handleDelete}/>
    </div>
    </>
  );
}
