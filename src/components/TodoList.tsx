import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'

interface props {
    todos:Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos,settodos}:props) => {
  return (
    <div className='todo'>{
        todos.map(todo=>(
            <SingleTodo todo = {todo} key = {todo.id} todos={todos} settodos={settodos} />
        ))
    }</div>
  )
}

export default TodoList