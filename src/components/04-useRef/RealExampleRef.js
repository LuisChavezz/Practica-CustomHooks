
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import { useState } from 'react';


import '../02-useEffect/effects.css';



export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);
    
    
    return (
        <div>
            <h1>Real example of useRef</h1>
            <hr />

            {show && <MultipleCustomHook /> /*sí show es true, muestas el compoente*/}

            <button
                className='btn btn-primary mt-5'
                onClick={ () => {
                    setShow( !show ); //cambiar el valor del estado a 'true'
                }}
            > Switch view component
            </button>
        </div>
    )
}
