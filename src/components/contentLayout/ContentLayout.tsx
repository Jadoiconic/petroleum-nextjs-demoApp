"use client";
import React, { useState } from "react";
import UserInput from "../inputcomp/UserInput";

function ContentLayout() {
  const [data, setData] = useState<string>();
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!data) return;
    setTodos([...todos, data]);
    setData("");
  };
  return (
    <div className="py-4 md:px-3">
      <h1 className="text-2xl font-bold">Hello dev</h1>
      <div>
        <>
          <UserInput
            value={data}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setData(e.target.value)
            }
            placeholder="Enter a task"
            type={"text"}
          />
          <button
            onClick={handleSubmit}
            className="px-8 py-2 rounded bg-red-500"
          >
            Add Todo
          </button>
        </>
        <div>
          <h1 className="font-bold text-xl">Tasks</h1>
          <ul data-testId="items-list">
            {todos &&
              todos.map((dat: string, key: number) => <li key={key} data-testId="Item">{dat}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentLayout;
