import {createSlice,configureStore,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk("netflex/api",async () => {
    const res = await fetch(`https://api.trakt.tv`);
    const promise =  res.json() ;
    return promise
})

const MoviesSlice = createSlice({
    name:"netflex",
    initialState : {
        data:[],
        error:false,
        loading:false,
        errorText:""
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchData.pending,(state) => {
            state.loading = true ;
            state.error = false ;
            state.errorText = ""
        })
        .addCase(fetchData.fulfilled,(state,action) => {
            state.loading = false ;
            state.error = false ;
            state.errorText = "" 
            state.data = action.payload ;
        })
        .addCase(fetchData.rejected,(state,action) => {
            state.loading = false ; 
            state.error = true ;
            state.errorText = action.error.message ;
        })
    }
})

export const store = configureStore({
    reducer:{
        netflex:MoviesSlice.reducer
    }
})