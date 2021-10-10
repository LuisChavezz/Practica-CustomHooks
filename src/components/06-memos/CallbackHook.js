


import { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {
    
    const [counter, setCounter] = useState( 10 );
    
    // const increment = ( ) => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( () => { /*retorna una versión memorizada de la función...
                    ...para indicar que la función no ha cambiado*/
        setCounter( c => c + 1 );
    }, [ setCounter ] /*sólo cuando cambie 'setCounter' (similar a useEffect)*/ );
    
    return (
        <div>
            <h1>Callback Hook: [- { counter } -]</h1>
            <hr />

            <ShowIncrement 
                increment={ increment }
            />
        </div>
    )
}
