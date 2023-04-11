import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);
  const [CompletedTodo, setCompletedTodo] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (todo) {
      settodos([...todos, { todo: todo, isdone: false, id: Date.now() }]);
      settodo("");
    }
  };

  const onDragEnds = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return;

      let add; let active = todos; let complete = CompletedTodo;
      if (source.droppableId === "TodosList") {
        add = active[source.index];
        active.splice(source.index, 1);
      } else {
        add = complete[source.index];
        complete.splice(source.index, 1);
      }
  
      // Destination Logic
      if (destination.droppableId === "TodosList") {
        active.splice(destination.index, 0, add);
      } else {
        complete.splice(destination.index, 0, add);
      }
  
      setCompletedTodo(complete);
      settodos(active);
    };
  
  return (
    <DragDropContext onDragEnd={onDragEnds}>
      <div className="App">
        <span className="heading">taskify</span>
        <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />

        <TodoList
          todos={todos}
          settodos={settodos}
          completedTodo={CompletedTodo}
          setCompletedTodo={setCompletedTodo}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
