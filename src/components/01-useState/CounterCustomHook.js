
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterCustomHooks = () => {

    const { state, setState, increment, decrement } = useCounter( 100 ); //usando el custom hook

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button
                onClick={ () => increment( 5 ) }
            >+5</button>

            <button
                onClick={ () => decrement( 5 ) }
            >-5</button>

            <button
                onClick={ () => setState( 100 ) }
            >Reset</button>
        </>
    )
}
