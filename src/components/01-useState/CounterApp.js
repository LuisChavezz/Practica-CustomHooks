
import { useState } from 'react';

import './counter.css';


export default function CounterApp() {

    const [ state, setState ] = useState({ // inicializa como objeto
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
    });

    const { counter1, counter2 } = state;

    const addCounter = () => {

        setState( { //setea un nuevo valor al state
            ...state, //mantiene el valor del state
            counter1: counter1 + 1 //reemplaza el valor del atributo (...state necesario)
        } );    
    }


    return (
        <>
            <h1>1° Counter: { counter1 }</h1>
            <h1>2° Counter: { counter2 }</h1>
            
            <hr/>

            <button
                onClick={ addCounter }
            >
                
                Counter +1
            </button>

        </>
    )
}
