import React, { useEffect, useState } from "react";

const TodoTracker = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  const filteredTodos =
    filter === "completed" ? todos.filter((t) => t.completed) : filter === "pending" ? todos.filter((t) => !t.completed) : todos;

  return (
    <div>
      <h2>Todo Tracker</h2>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <p>
        Completed: {todos.filter((t) => t.completed).length} | Pending: {todos.filter((t) => !t.completed).length}
      </p>

      <ul>
        {filteredTodos.map((t) => (
          <li key={t.id}>
            {t.title} — <strong>{t.completed ? "Done ✅" : "Pending ⏳"}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTracker;
