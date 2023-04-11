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
      {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                settodos={settodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
      {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Active Tasks</span>
            {completedTodo.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={completedTodo}
                key={todo.id}
                settodos={setCompletedTodo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
