import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import TodoItem from '../../components/todo/TodoItem';
import InputString from './__partials/InputString';
import AddButton from './__partials/AddButton';
import FilterButton from './__partials/FilterButton';

export default function todo() {
    const TITLE = "TODO LIST"
    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: 'sapu rumah',
            createdBy: 'riyadh',
            published: false,
            checked: false
        },
        {
            id: 2,
            todo: 'bersih wc',
            createdBy: 'riyadh 2',
            published: false,
            checked: false
        }
    ])

    const todoRef = useRef();

    const [body, setBody] = useState({
        todo: "",
        createdBy: "",
        date: "",
        createdAt: ""
    });

    //set object value
    const updateBody = (name, value) => {
        //setItem(item => ({...item, ['value']: ''}))
        setBody(item => ({...item, [name]: value}))
    }

    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {
        setFilterTodos(todos);
    }, [todos]);

    const createFunction = (item) =>
    {
        let newTodo = {
            id:todos.length+1,
            todo: body.todo,
            createdBy: body.createdBy, 
            published: false,
            checked: false
        }

        setTodos((todo) => [...todo, newTodo]);
        //set null object
        setBody(item => ({...item, ['todo']: ''}))
        setBody(item => ({...item, ['createdBy']: ''}))
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
    const eventFilterTodos = (value) => {
        // let status = e.target.value;
        let status = value;
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
                    <h1 className="text-grey-darkest">{TITLE}</h1>
                    <div className="mt-4">
                        <InputString 
                            value={body.todo} 
                            refer={todoRef} 
                            updateValue={updateBody} 
                            name="todo" 
                            placeholder="todo name" 
                            errorMessage="todo should be 3-16 characters and should'nt include any special charaters" 
                            pattern="[A-Za-z0-9]{3,16}$" 
                            required={true}  />
                        <InputString 
                            value={body.createdBy} 
                            updateValue={updateBody} 
                            name="createdBy" 
                            placeholder="created by" 
                            errorMessage="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" 
                            pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/" 
                            required={true}  />
                        <AddButton createFunction={createFunction} />
                    </div>
                </div>
                {/* <button type="button" value="all" onClick={eventFilterTodos}  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">All</button> */}
                <FilterButton type="button" updateFilter={eventFilterTodos} value="all" label="All" style="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" />
                <FilterButton type="button" updateFilter={eventFilterTodos} value="checked" label="Checked" style="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" />
                <FilterButton type="button" updateFilter={eventFilterTodos} value="unchecked" label="Unchecked" style="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" />
                <div>
                    {filterTodos.map(item => (
                        <TodoItem key={item.id} todo={item} deleteTodo={deleteTodo} checkedTodo={checkedTodo} />
                    ))}
                </div>
            </div>
        </div>
    )
}
