import React from 'react'
import TodoCrad from './TodoCrad'

export default function TodoList() {
    let todos =[
        'Go to the gym',
        'Play League',
        'Finish React tutorial'
    ]

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCrad key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCrad>
                )
            })}
        </ul>
    )    
}
