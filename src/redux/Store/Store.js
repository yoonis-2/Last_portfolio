import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/Cart"

const cartStore = configureStore({
    reducer:{
        NewsCart: cartSlice
    }
})

export default cartStore