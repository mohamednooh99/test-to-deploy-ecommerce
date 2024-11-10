"use client";


import { createContext , useContext, useReducer} from "react";



export const CartContext = createContext(null)
export const openCartContext = createContext(false)

 

// Define initial state
const initialState = {
    cart: [],
};

// Define actions
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       // paytemload = new
//       state.cart.push(action.payload);
//     },
//     delateItem(state, action) {
//       // payload = piizzaId
//       state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
//     },
//     increaseItemQuantity(state, action) {
//       const item = state.cart.find((item) => item.pizzaId === action.payload);
//       item.quantity++;
//       item.totalPrice = item.quantity * item.unitPrice;
//     },
//     decreaseItemQuantity(state, action) {
//       const item = state.cart.find((item) => item.pizzaId === action.payload);
//       item.quantity--;
//       item.totalPrice = item.quantity * item.unitPrice;

//       if (item.quantity === 0) cartSlice.caseReducers.delateItem(state, action);
//     },
//     clearCart(state, action) {
//       state.cart = [];
//     },
//   },
// });

// export const {
//   addItem,
//   delateItem,
//   increaseItemQuantity,
//   decreaseItemQuantity,
//   clearCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;

// export const getCart = (state) => state.cart.cart;

// export const getTotalCartQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// export const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// export const getCurrentQuantityById = (id) => (state) =>
//   state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;