
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MultipleCustomHook = () => {
    
    const { counter, increment } = useCounter( 1 );

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    //extraer 'author' y 'quote' del objeto que se encuentra en la pocisión 0 del arrelgo 'data'
    const { author, quote } = !!data && data[0];
        /*sí data existe, ENTONCES (&&) guarda el contedino de 'author' y 'quote'...
        ...de data en la posición [0]*/

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ? ( //sí está cargando
                    <div className='alert alert-info text-center'>
                        loading...
                    </div>

                ) : ( //sí ya está cargado
                    <blockquote className='blockquote text-end'>
                        <p  >{ quote }</p>
                        <footer className='blockquote-footer'>{ author }</footer>
                    </blockquote>
                )
                
            }

            <button 
                className='btn btn-primary '
                onClick={ increment }
            >
                Next quote
            </button>

        </div>
    )
}
