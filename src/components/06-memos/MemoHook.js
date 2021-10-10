
import { useCounter } from '../../hooks/useCounter';
import { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';



export const MemoHook = () => {
    
    //custom hook 'useCounter'
    const { counter, increment } = useCounter( 10 );

    //useState
    const [show, setShow] = useState( true );
    

    /*memoriza el valor que regresa 'procesoPesado' y solo se vuelve a 
        disparar si '[counter]' cambia */
    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [counter] )

    return (
        <div>
            <h1>Memo Hook - Counter: { counter } </h1>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button
                className='btn btn-outline-primary'
                onClick={ increment }
            >
                Add +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={ () => {
                    setShow( !show ) //negamos el valor booleano
                }}
            >
                Show / Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
