import {createSlice,createAsyncThunk} from "@reduxjs/toolkit" ;

export const fetchData = createAsyncThunk("fetch/data",async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users") ;
    return data.json() ;
})

export const counterSlice = createSlice({
    name:"fetch",
    initialState:{
        data:[],
        error:false,
        loading:false
    },
    reducers:{
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchData.pending,(state,action) => {
            state.loading = true ;
        })
        .addCase(fetchData.fulfilled,(state,action) => {
            state.loading = false ;
            state.data = action.payload ;
        })
        .addCase(fetchData.rejected,(state,action) => {
            state.loading = false ;
            state.error = true ;
        })
    }
});

export default counterSlice.reducer ;