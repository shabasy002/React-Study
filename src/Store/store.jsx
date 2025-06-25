import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../component/counterSlice'
import cartReducer from './../component/cartSlice'

const store=configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer, // 👈 Register cart slice
    },
});

export default store;