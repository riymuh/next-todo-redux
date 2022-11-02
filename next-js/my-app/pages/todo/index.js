import React from 'react'
import { useState, useEffect } from 'react'
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

    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {
        setFilterTodos(todos);
    }, []);

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

    const checkedTodo = (todo_id, todo) => {
        let index = todos.findIndex((item) => item.id == todo_id);
        const newTodos = [...todos];
        newTodos[index] = todo;
        setTodos(newTodos);

    }

    //filter
    const eventFilterTodos = (e) => {
        let status = e.target.value;
        let data;
        switch(status) {
            case 'checked':
                data = todos.filter((item) => item.checked == true);
                setFilterTodos(data);
              break;
            case 'unchecked':
                data = todos.filter((item) => item.checked == false);
                setFilterTodos(data);
              break;
            default:
                setFilterTodos(todos);
          }
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
                <button type="button" value="all" onClick={eventFilterTodos}  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">All</button>
                <button type="button" value="checked" onClick={eventFilterTodos} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Checked</button>
                <button type="button" value="unchecked" onClick={eventFilterTodos} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Unchecked</button>
                <div>
                    {filterTodos.map(item => (
                        <TodoItem key={item.id} todo={item} deleteTodo={deleteTodo} checkedTodo={checkedTodo} />
                    ))}
                </div>
            </div>
        </div>
    )
}
