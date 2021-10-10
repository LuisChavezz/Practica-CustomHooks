
// import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues; // Destructura el objeto del 'formState'

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }

    // const handleInputChange = (e) => { //Función onChange para asignar valor al state

    //     //Asignará un nuevo state cada vez que haya un cambio en algun input del form
    //     setFormState( {
    //         ...formValues,
    //         [ e.target.name ]: e.target.value //el 'target.name' regresa el 'name' del input que...
    //                                 //...actuará como nombre de la propiedad para el seteo del state
    //     } );
    // }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormCustomHook</h1>
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

            <div>
                <input 
                    type='password'
                    name='password'
                    placeholder='******'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit'>Save</button>
        </form>
    )
}