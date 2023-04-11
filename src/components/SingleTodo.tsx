import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import './TodoList'

const SingleTodo = ({
  index,
  todo,
  todos,
  settodos,
}: {
  index: number;
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const [edit, setedit] = useState<boolean>(false);
  const [edittodo, setedittodo] = useState<string>(todo.todo);
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    settodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: edittodo } : todo))
    );
    setedit(false);
  };
  const hanleDone = (id: number) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              ref={inputRef}
              className="todos__single--test"
              value={edittodo}
              onChange={(e) => setedittodo(e.target.value)}
            />
          ) : !todo.isdone ? (
            <span className="todos__single--text">{todo.todo}</span>
          ) : (
            <s className="todos__single--text">{todo.todo}</s>
          )}

          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isdone) {
                  setedit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span
              className="icon"
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              <AiFillDelete />
            </span>
            <span
              className="icon"
              onClick={() => {
                hanleDone(todo.id);
              }}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
