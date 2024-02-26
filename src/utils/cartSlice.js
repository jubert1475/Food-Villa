import { createSlice,  } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{state.items.push(action.payload)},
        removeItem:(state,action)=>{state.items.pop()},
        clearCart:(state,action)=>{state.items[""]},
    },

})

export default cartSlice.reducer;

export const {addItem, remoceItem, clearItem} = cartSlice.actions;

