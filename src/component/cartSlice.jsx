import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
     name: 'cart',
  initialState,
    reducers:{
        addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find(i => i.id === id);
      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalAmount -= existing.price * existing.quantity;
        state.cartItems = state.cartItems.filter(i => i.id !== id);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find(i => i.id === id);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= existing.price;
      } else if (existing && existing.quantity === 1) {
        // If quantity is 1, remove the item from cart
        state.totalQuantity -= 1;
        state.totalAmount -= existing.price;
        state.cartItems = state.cartItems.filter(i => i.id !== id);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    }

});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;