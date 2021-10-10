

import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {

    
    return (
        <ul className='list-group'>
            {
                todos.map( (todo, index) => (
                    <TodoListItem 
                        key={ todo.id }
                        todo={ todo }
                        handleDelete={ handleDelete }
                        index={ index }
                        handleToggle={ handleToggle }
                    />
                ))
            }
        </ul>
    )
}
