import React, {useEffect, useState} from 'react'

export default function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    if (!todos.length) {
        return
    }

    return <div>
        <h1>Todos</h1>
        <ul>
            {
                todos.map((todo, index) => {
                    return <li key={index} style={{color: todo.completed ? 'green' : 'red'}}>
                        {todo.title}
                    </li>
                })
            }
        </ul>
    </div>
}