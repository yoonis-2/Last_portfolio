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

    }
})

export const {AddtoCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer