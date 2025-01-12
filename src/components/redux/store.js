import {configureStore} from "@reduxjs/toolkit" ;
import reducer from "./sliceName";

export const store = configureStore({
    reducer:{
        fetchadd:reducer
    }
})
