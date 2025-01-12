import { createStore } from "redux";


const initialState = {
    name : "" ,
    email : "",
    module:"",
    moduleIndex:"" ,
    note:"" 
}

function reducer(state = initialState , action){

    switch(action.type){
        case "login" :
            return {...state,email:action.payload.email,name:action.payload.name}
            break ;
        case "language" :
            return {...state,module:action.payload.language,moduleIndex:action.payload.moduleIndex}
            break ;
        case "Score" :
            return {...state,note:action.payload.note} ;
            break ;
        default : 
            return state ;
    }

}

export const store = createStore(reducer) ;

