import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

function Todo(t) {
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <h2>{t.t.todo}</h2>
      <button
        onClick={() => dispatch(deleteTodo(t.t.id))}
        className="close material-symbols-outlined"
      >
        delete
      </button>
    </div>
  );
}

export default Todo;
