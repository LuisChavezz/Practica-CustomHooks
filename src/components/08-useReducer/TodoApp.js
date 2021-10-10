import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './todoApp.css';


//to do list
const init = () => { // función que actuará como 'initial state'

    return JSON.parse( localStorage.getItem('todos'));

    // return [{ 
    //     id: new Date().getTime(),
    //     desc: 'Learn React JS',
    //     done: false
    // }];
}

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    

    useEffect( () => {

        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos] );

    const handleDelete = ( todoId ) => {
        // console.log( todoId );

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }
    
    
    return (
        <div>
            <h1>To-Do App ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-5">

                    <TodoList  
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>

                <div className="col-7">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>


            </div>
        </div>
    )
}
