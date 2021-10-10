import { useContext } from "react"
import { UserContext } from "./UserContext"


export const LoginScreen = () => {
    
    const { user, setUser } = useContext( UserContext );
    
    const objeto = {
        id: 8840,
        name: 'Luigiberto',
        password: 'ceja1025',
    }

    const loginEvent = ( usuario ) => {
        setUser( usuario );
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-dark"
                onClick={ () => loginEvent( objeto ) }
            >
                Login
            </button>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </div>
    )
}
