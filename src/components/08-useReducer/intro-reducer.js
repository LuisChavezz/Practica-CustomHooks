

const initialState = [{ //estado inicial de los 'To-Do' list.
    id: 1,
    todo: 'Comprar pan',
    done: false,
}];

const todoReducer = ( state = initialState, action )  => {

    if ( action?.type === 'agregar' ) { // 'action?' pregunta si lo tiene, si no, no hace nada
        return [...state, action.payload];
    }

    return state;
}

let todoList = todoReducer();

const newTodo = {
    id:2,
    todo: 'Comprar leche',
    done: false,
}

const action = {
    type: 'agregar',
    payload: newTodo,
}

todoList = todoReducer( todoList, action );

console.log( todoList );