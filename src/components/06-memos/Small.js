
import { memo } from "react"

export const Small = memo(( { value } ) => {
    /* memo sirve para no volver a disparar funciones... 
    ... si su componente no cambia en verdad*/
    
    
    
    return (
        <div>
            <small>{ value }</small>
        </div>
    )
})
