import { useState } from "react"


export const useCounter = ( initialState = 10 ) => { //parámetro que da un valor por defecto (si no recibe un parámetro)
    
    const [ counter, setCounter ] = useState( initialState );

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 2 );
    }

    return {
        counter,
        setCounter,
        increment,
        decrement,
    }

}
