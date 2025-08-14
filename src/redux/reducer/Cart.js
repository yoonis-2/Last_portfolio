import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "NewsCart",
    initialState:{
        item:[]
    },
    reducers:{
        AddtoCart: (state, action) => {
            const newData = action.payload
            state.item.push(newData)
        },
        Removefromcart:(state,action) => {
            state.item = state.item.filter(x => x.id !== action.payload.id)
        }

    }
})

export const {AddtoCart, Removefromcart} = cartSlice.actions
export default cartSlice.reducer