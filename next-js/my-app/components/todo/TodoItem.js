import React from 'react'

export default function todoItem({todo, deleteTodo}) {
    const handleDeleteTodo = () => {
        deleteTodo(todo.id)
    }
    return (
        <div className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest">{todo.task}</p>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">{todo.checked ? 'Checked' : 'Uncheck' }</button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={handleDeleteTodo}>Remove</button>
        </div>
    )
}
