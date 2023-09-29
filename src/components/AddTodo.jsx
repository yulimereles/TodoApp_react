import React, { useState } from 'react'

export const AddTodo = ({ setListTodos, listTodos }) => {

    // Lógica para añadir un todo
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        e.preventDefault()

        setTodo(e.target.value)
    }

    const handleSubmitTodo = (e) => {
        e.preventDefault()

        if (e.keyCode === 13) {
            const newTodo = {
                id: new Date().getTime(),
                desc: todo,
                done: false
            }

            setListTodos([
                ...listTodos,
                newTodo
            ])

            setTodo("")
        }
    }

    return (
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
            <h3>New Todo</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Add Todo"
                name="desc"
                value={todo}
                // Evento cuando cambia el valor del input
                onChange={handleChange}
                // Evento cuando presiona tecla Enter en ASCII
                onKeyUpCapture={handleSubmitTodo}
            />
        </div>
    )
}