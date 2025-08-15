// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "NewsCart",
//     initialState:{
//         item:[]
//     },
//     reducers:{
//         AddtoCart: (state, action) => {
//             const newData = action.payload
//             state.item.push(newData)
//         },
//     }
// })

// export const {AddtoCart, Removefromcart} = cartSlice.actions
// export default cartSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "NewsCart",
  initialState: {
    item: [],
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    AddtoCart: (state, action) => {
      const newData = action.payload;
      const existingItem = state.item.find(i => i.id === newData.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({ ...newData, quantity: 1 });
      }
      // update totals
      state.totalQuantity += 1;
      state.totalPrice += newData.price;
    },

    RemoveFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.item.find(i => i.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.item = state.item.filter(i => i.id !== id);
      }
    },

    UpdateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.item.find(i => i.id === id);
      if (existingItem && quantity > 0) {
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice += (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
      }
    },

    CalculateCart: (state) => {
      state.totalQuantity = state.item.reduce((total, i) => total + i.quantity, 0);
      state.totalPrice = state.item.reduce((total, i) => total + i.price * i.quantity, 0);
    },

    ClearCart: (state) => {
      state.item = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

export const { AddtoCart, RemoveFromCart, UpdateCart, CalculateCart, ClearCart } = cartSlice.actions;
export default cartSlice.reducer;
