import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App:React.FC = () => {
  const [todo, settodo] = useState<string>('')
  const [todos, settodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent<EventTarget>) =>{
    e.preventDefault();

    if (todo){
      settodos([...todos,{todo:todo,isdone:false,id:Date.now()}])
      settodo("")
    }

  }
  console.log(todos)

  return (
    <div className="App">
      <span className='heading'>taskify</span>
      <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />

      <TodoList todos={todos} settodos={settodos} />
    </div>
  );
}

export default App;
