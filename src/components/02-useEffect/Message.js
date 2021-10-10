import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState( {x: 0, y:0} );
    const { x, y } = coords;

    useEffect(() => {
        
        const mouseMove = (e) => {
            const coords = {
                x: e.x,
                y: e.y,
            }
            setCoords( coords );
            console.log(coords);
        }

        window.addEventListener('mousemove', mouseMove);
        


        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('componente Desmontado');
        }
    }, [])
    
    return (
        <div>
            <h3>Message.js works!</h3>
            <p>
                z: { x }, y: { y }
            </p>
        </div>
    )
}
