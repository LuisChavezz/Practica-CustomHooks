import { useForm } from "../../hooks/useForm";



export const TodoAdd = ({ handleAddTodo }) => {
    
    const [ {description}, handleInputChange, reset ] = useForm({
        description: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 2 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );
        reset();
    }
    
    return (
        <>
            <h3>Añadir To-Do</h3>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    name="description"
                    placeholder="Tarea..."
                    autoComplete="off"
                    className="form-control"
                    value = { description }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="col-12 btn btn-block btn-outline-success mt-3"
                >
                    Añadir
                </button>
            </form>
        </>
    )
}
