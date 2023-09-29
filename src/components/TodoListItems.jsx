import React from 'react'

export const TodoListItems = ({ setListTodos, listTodos }) => {

    // Lógica para completar un todo
    const handleCompleteTodo = (e) => {
        e.preventDefault()

        const completedTodos = listTodos.map(todo => {
            if (todo.id === parseInt(e.target.id)) {
                todo.done = !todo.done
                return todo
            }
            return todo
        })
        setListTodos(completedTodos)
    }

    return (
        <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>
            <ul className="list-unstyled">
                {
                    listTodos.length ? listTodos.map(todo => {
                        return (
                            <li key={todo.id} className='d-flex justify-content-center mt-3'>
                                <p className='me-4'>{todo.desc}</p>
                                <button id={todo.id} className='btn btn-warning ms-4' onClick={handleCompleteTodo}>{todo.done ? "Completada" : "Pendiente"}</button>
                            </li>
                        )
                    }) : <p>Todavia no hay ningun Todo!</p>
                }
            </ul>
        </div>
    )
}