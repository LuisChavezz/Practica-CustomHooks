
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';


import '../02-useEffect/effects.css';
import { useState } from 'react';

export const Memorize = () => {
    
    //custom hook 'useCounter'
    const { counter, increment } = useCounter( 10 );

    //useState
    const [show, setShow] = useState( true );
    
    
    return (
        <div>
            <h1>Counter: <Small value={ counter }/> </h1>
            <hr />

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
