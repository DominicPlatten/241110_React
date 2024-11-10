import React from 'react'

export default function TodoList() {
    let todos =[
        'Go to the gym',
        'Play League',
        'Finish React tutorial'
    ]

    return (
        <div>
          {todos.map((todo, todoIndex) => {
            return (
              <li key={todoIndex}>{todo}</li>
            );
          })}
        </div>
      );
      
}
