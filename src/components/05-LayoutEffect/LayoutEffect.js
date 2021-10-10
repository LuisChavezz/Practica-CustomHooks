
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import { useLayoutEffect, useRef, useState } from 'react';


import './layout.css';


export const LayoutEffect = () => {
    
    const { counter, increment } = useCounter( 1 );

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    //extraer 'author' y 'quote' del objeto que se encuentra en la pocisión 0 del arrelgo 'data'
    const { quote } = !!data && data[0];
        /*sí data existe, ENTONCES (&&) guarda el contedino de 'author' y 'quote'...
        ...de data en la posición [0]*/

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({ });

    useLayoutEffect(() => {
        
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [ quote ]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className='blockquote text-end'>
                <p  
                    className='mb-0'
                    ref={ pTag }
                > { quote }</p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>
            
            <button 
                className='btn btn-primary '
                onClick={ increment }
            >
                Next quote
            </button>

        </div>
    )
}
