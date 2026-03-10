import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Mutating the state directly
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK-- either mutate the existing state or return the new state.
            state.items.length = 0; // orginalState = [];

            // return {items: []} ; // orginalState = [] New state which change the orginal state and make it empty
        },
    },
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;