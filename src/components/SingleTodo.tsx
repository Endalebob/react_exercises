import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import {MdDone} from "react-icons/md"




const SingleTodo = ({
  todo,
  todos,
  settodos,
}: {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
    const hanleDone = (id:number)=>{
        settodos(todos.map((todo)=>todo.id === id?{...todo,isdone:!todo.isdone}:todo))

}
const handleDelete = (id:number)=>{
    settodos(todos.filter((todo)=>todo.id !== id))
}
  return (
    <form className="todos__single">
       { 
       !todo.isdone?
      <span className="todos__single--text">{todo.todo}</span>:
        <s className="todos__single--text">{todo.todo}</s>
      }
      
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={()=>{handleDelete(todo.id)}}><AiFillDelete/></span>
        <span className="icon" onClick={()=>{hanleDone(todo.id)}}><MdDone/></span>
      </div>
    </form>
  );
};

export default SingleTodo;
