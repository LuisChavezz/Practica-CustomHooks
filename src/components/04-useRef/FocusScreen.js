

import { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const handleClick = () => {

        inputRef.current.select(); //referian al elemento html que contenga el atributo ref e inputref
        console.log(inputRef.current);
    }    
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className='form-control'
                placeholder='First name'
            />

            <button 
                className='btn btn-outline-primary mt-5'
                onClick={ handleClick }
            >
                Focus input
            </button>
        </div>
    )
}
