import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todo/todoSlice";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    if (todo !=="") {
      dispatch(createTodo({ todo }));
      setTodo("");
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Yapılacaklar</label>
          <input
            type="text"
            name="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-reverse" type="submit">
            Yapılacak ekle
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoForm;
