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
        RemoveItems: (state, action) => {
         const itemIndex = action.payload
         state.item = state.item.filter((_, index) => index !== itemIndex)
        }

   }
 })

 export const {AddtoCart, Removefromcart} = cartSlice.actions
 export default cartSlice.reducer


