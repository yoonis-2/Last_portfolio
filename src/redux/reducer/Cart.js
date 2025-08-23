 import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: "NewsCart",
    initialState:{
        item:[],
        TotalPrice:0
     
     },
     reducers:{
         AddtoCart: (state, action) => {
             const newData = action.payload
           state.item.push(newData)
         },
        RemoveItems: (state, action) => {
         const itemIndex = action.payload
         state.item = state.item.filter((_, index) => index !== itemIndex)
        },
        CalculatePrice: (state) => {
        let price = 0 
        state.item.forech((data) => {
         price += data.price
        })
         state.TotalPrice = price 
   
        }

   }
 })

 export const {AddtoCart, RemoveItems,CalculatePrice} = cartSlice.actions
 export default cartSlice.reducer


