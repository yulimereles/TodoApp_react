import React, { useState } from "react"
import { AddTodo } from "../components/AddTodo"
import { TodoListItems } from "../components/TodoListItems"

export const TodoApp = () => {

  // Lógica para almacenar los todos

  const [listTodos, setListTodos] = useState([])

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button className="btn btn-sm btn-warning">Clear Completed</button>
        </div>
      </div>

      <div className="row mb-3">
        <AddTodo
          setListTodos={setListTodos}
          listTodos={listTodos}
        />

        <TodoListItems
          setListTodos={setListTodos}
          listTodos={listTodos}
        />
      </div>
    </div>
  )
}