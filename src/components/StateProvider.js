import { createContext, useContext, useReducer } from "react";
//pasar variables de un componente a otro
export const StateContext = createContext();

//herramienta para pasar las variables
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//consumir desde cualquier componente los cambios de estado 
export const useStateValue = () => useContext(StateContext);


//agregar al carrito los productos