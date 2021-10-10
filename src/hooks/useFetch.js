import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {
    
    const isMounted = useRef( true );

    const [state, setState] = useState( {
        data: null,
        loading: true,
        error: null,
    } );

    useEffect( () => { //se ejecutará cuando carga el componente
        return () => {
            isMounted.current = false;
        }
    }, [] );

    useEffect( () => {

        setState( {data: null, loading: true, error: null} ); //vuelve a cargar el 'loading' al cambiar de quote

        fetch( url )
            .then( response => response.json() )
            .then( data => {

                //prevenir el setState cuando no esté montado
                if( isMounted.current ) { //sí el componente está montado
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    });
                }
                

            });

    }, [ url ]);

    return state;
}
