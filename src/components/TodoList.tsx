import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";
import { Droppable } from "react-beautiful-dnd";

interface props {
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Todo[];
  setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  settodos,
  completedTodo,
  setCompletedTodo,
}: props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo,index) => (
              <SingleTodo
              index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                settodos={settodos}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove" >
      {(provided) => (
        <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
        <span className="todos__heading">Active Tasks</span>
        {completedTodo.map((todo,index) => (
          <SingleTodo
          index={index}
            todo={todo}
            todos={completedTodo}
            key={todo.id}
            settodos={setCompletedTodo}
        
          />
        ))}
      </div>
        )}
      
      </Droppable>
    </div>
  );
};

export default TodoList;
