import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "@/interfaces/book";


interface CartType extends BookType{
    id: number
    oneQuantity: number
}

interface UpdateCartType{
    key: string
    val: number
    id: number
    oneQuantity: number
}

interface CartItemType extends BookType{
    quantity: number
    oneQuantityPrice: number
}

interface StateType{
    cartItems: CartItemType[]
}
const initialState:StateType = {
    cartItems: [],
  };

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: any, action: PayloadAction<CartType>) => {
            const item: any = state.cartItems.find(
                (p: any) => p.id === action.payload.id
            );
            if (item) {
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice * item.quantity;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state: any, action: PayloadAction<UpdateCartType>) => {
            state.cartItems = state.cartItems.map((p: any) => {
                if (p.id === action.payload.id) {
                    if (action.payload.key === "quantity") {
                        p.attributes.price =
                            p.oneQuantityPrice * action.payload.val;
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (p: any) => p.id !== action.payload.id
            );
        },

    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
