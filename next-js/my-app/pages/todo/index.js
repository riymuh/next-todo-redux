import React from 'react'
import { useState } from 'react'
import TodoItem from '../../components/todo/TodoItem';

export default function todo() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            task: 'sapu rumah',
            published: false,
            checked: false
        },
        {
            id: 2,
            task: 'bersih wc',
            published: false,
            checked: false
        }
    ])

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name  = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const newTodo = () =>
    {
        let newTodo = {
            id:todos.length+1,
            task: inputs.task,
            published: false,
            checked: false
        }
        setInputs(values => ({...values, ['task']: ''}))
        setTodos((todo) => [...todo, newTodo]);
    }

    const deleteTodo = (todo_id) => {
        let todosUpdate = todos.filter((item) => item.id != todo_id);
        setTodos(todosUpdate);
    }

    const checkedTodo = (todo_id) => {

    }

    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" name="task" value={inputs.task} onChange={handleChange} />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={newTodo}>Add</button>
                    </div>
                </div>
                <div>
                    {todos.map(item => (
                        <TodoItem key={item.id} todo={item} deleteTodo={deleteTodo}  />
                    ))}
                </div>
            </div>
        </div>
    )
}
