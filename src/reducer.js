export const initialState ={
    pollos :[],
    user:null
};

export const actionTypes ={
    ADD_TO_POLLOS: "ADD_TO_POLLOS",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_POLLOS:"EMPTY_POLLOS"
};



const reducer = (state,action)=>{
    console.log(action)
    switch (action.type) {
        case "ADD_TO_POLLOS":
            return {
                ...state,
                pollos:[...state.pollos,action.item]
            };
        case "REMOVE_ITEM":
            const index = state.pollos.findIndex((pollosItem=> pollosItem.id === action.id))
            let newPollos = [...state.pollos];
            if(index>=0){
                //elimina un elemento con ese indice
                newPollos.splice(index,1)
            }else{
                console.log("No se removio")
            }
            return {
                ...state,
                pollos: newPollos, 
            }
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "EMPTY_POLLOS":
            return{
                ...state,
                pollos:action.pollos
            }
        default: return state;
    }
    
};

export default reducer;