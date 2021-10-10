
import { NavBar } from "./NavBar";

import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { AboutScreen } from "./AboutScreen";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";




export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <Switch> {/* Sistema de Rutas, Ruta y atributos de la ruta */}
                    <Route  
                        exact
                        path="/" 
                        component={ HomeScreen }
                    />
                    
                    <Route  
                        path="/about" 
                        component={ AboutScreen }
                    />

                    <Route  
                        path="/login" 
                        component={ LoginScreen }
                    />

                    <Redirect to='/' /> {/* Redirige cuando se ingrese una inexistente */}
                </Switch>

            </div>
        </Router>
    )
}
