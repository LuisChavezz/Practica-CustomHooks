

export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            // console.log(state);
            return [ ...state, action.payload ];
        
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );

        case 'toggle':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return{
                        ...todo,
                        done: !todo.done
                    
                    } 
                } else {
                    return todo;
                }

            });

        default:



            break;
    }

}