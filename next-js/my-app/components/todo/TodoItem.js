import React from 'react'

export default function todoItem({todo, deleteTodo, checkedTodo}) {
    const handleDeleteTodo = () => {
        deleteTodo(todo.id)
    }
    const handleCheckedTodo = () => {
        todo.checked = !todo.checked
        checkedTodo(todo.id, todo)
    }
    return (
        <div className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest">{todo.todo}</p>
            <button className={`flex-no-shrink p-2 ml-4 mr-2 border-gray-300  border rounded hover:text-white ${todo.checked ? "text-black" : "bg-red-700"} text-white border-green hover:bg-green`} onClick={handleCheckedTodo}>{todo.checked ? 'Checked' : 'Uncheck' }</button>
            <button className="flex-no-shrink p-2 ml-2  border-gray-300 border rounded text-red border-red hover:text-white hover:bg-red" onClick={handleDeleteTodo}>Remove</button>
        </div>
    )
}
