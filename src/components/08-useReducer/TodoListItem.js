

import { BsFillTrashFill } from "react-icons/bs";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle  }) => {
    return (
        <li
            key={ todo.id }
            className='list-group-item'
        >
            <p 
                onClick={ () => handleToggle( todo.id ) }
                className={`m-0 ${ todo.done && 'complete' }`}
            >
                { index + 1}° { todo.desc }
            </p>
            <button
                className='btn btn-danger'
                onClick={ () => handleDelete(todo.id) }
            >
                <BsFillTrashFill />
            </button>
        </li>
    )
}
