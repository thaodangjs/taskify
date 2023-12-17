import React from "react";
import { Todo } from "../model";
import TodoItems from "./TodoItems";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <TodoItems
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
