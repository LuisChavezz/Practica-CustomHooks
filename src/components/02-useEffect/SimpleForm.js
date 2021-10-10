
import { useState } from 'react';
import { useEffect } from 'react';

import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState; // Destructura el objeto del 'formState'

    useEffect( () => {

        // console.log(formState);

    }, [ formState ] ); //el efecto se ejecutará siempre que haya un cambio en 'formState'


    const handleInputChange = (e) => { //Función onChange para asignar valor al state

        //Asignará un nuevo state cada vez que haya un cambio en algun input del form
        setFormState( {
            ...formState,
            [ e.target.name ]: e.target.value //el 'target.name' regresa el 'name' del input que...
                                    //...actuará como nombre de la propiedad para el seteo del state
        } );
    }


    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div>
                <input 
                    type='text'
                    name='name'
                    placeholder='Your name'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div>
                <input 
                    type='email'
                    name='email'
                    placeholder='Your email'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name && <Message />}

        </>
    )
}