import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import islemServices from "./islemServices"

const initialState={
    islemler:[],
    aylar:[],
    yillar:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const aylarGetir=createAsyncThunk("islem/aylarGetir",async(_,thunkAPI)=>{
    try {
        return await islemServices.aylarGetir()
    } catch (error) {
        const message =error.message

        return thunkAPI.rejectWithValue(message)
    }
})
export const yillarGetir=createAsyncThunk("islem/yillarGetir",async(_,thunkAPI)=>{
    try {
        return await islemServices.yillarGetir()
    } catch (error) {
        const message =error.message

        return thunkAPI.rejectWithValue(message)
    }
})
export const islemEkle=createAsyncThunk("islem/islemEkle",async(veri,thunkAPI)=>{
    try {
        return await islemServices.islemEkle(veri)
    } catch (error) {
        const message =error.message

        return thunkAPI.rejectWithValue(message)
    }
})
export const son10islemGetir=createAsyncThunk("islem/son10islemGetir",async(email,thunkAPI)=>{
    try {
        return await islemServices.son10islemGetir(email)
    } catch (error) {
        const message =error.message

        return thunkAPI.rejectWithValue(message)
    }
})
export const filtreSonuc=createAsyncThunk("islem/filtreSonuc",async(secilenAy,secilenYil,thunkAPI)=>{
    try {
        return await islemServices.filtreSonuc(secilenAy,secilenYil)
    } catch (error) {
        const message =error.message

        return thunkAPI.rejectWithValue(message)
    }
})
export const deleteIslem = createAsyncThunk(
    "todos/delete",
    async (id, thunkAPI) => {
      try {
        return  await islemServices.deleteIslem(id) 
      } catch (error) {
        const message = error.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
    
  );
export const islemSlice=createSlice({
    name:"islemSlice",
    initialState,
    reducers:{
        reset:(state)=>{
        state.isError=false
        state.isSuccess=false
        state.isLoading=false
        state.message=""  
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(aylarGetir.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(aylarGetir.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.aylar=action.payload
            })
            .addCase(aylarGetir.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.message=action.payload
                state.aylar=[]
            })
            .addCase(islemEkle.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(islemEkle.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.islemler.unshift(action.payload)
            })
            .addCase(islemEkle.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.message=action.payload
            })
            .addCase(yillarGetir.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(yillarGetir.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.yillar=action.payload
            })
            .addCase(yillarGetir.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.message=action.payload
                state.yillar=[]
            })
            .addCase(son10islemGetir.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(son10islemGetir.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.islemler=action.payload
            })
            .addCase(son10islemGetir.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.message=action.payload
                state.islemler=[]
            })
            .addCase(deleteIslem.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(deleteIslem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSucces = true;
                state.islemler = state.islemler.filter((islem) => islem.id !== action.payload);
              })
              .addCase(deleteIslem.rejected, (state, action) => {
                state.isLoading = false;
                state.isSucces = false;
                state.isError = true;
                state.message = action.payload;
              })
    }
})

export const {reset}=islemSlice.actions

export default islemSlice.reducer