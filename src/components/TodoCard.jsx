//rfc = React Functional Component
import React from 'react'

export default function TodoCard() {
  return (
    <li className='todoItem' key={todoIndex}>{todo}
        <i class="fa-solid fa-pen-to-square"></i>
    </li>
  )
}
