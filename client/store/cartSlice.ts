import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "@/lib/utils/interfaces/book";


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
    oneQuantity: number
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
            console.log(action.payload)
            const item: any = state.cartItems.find(
                (p: any) => p.id === action.payload.id
            );
            if (item) {
                item.quantity++;
                item.attributes.price = item.oneQuantity * item.quantity;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state: any, action: PayloadAction<UpdateCartType>) => {
            state.cartItems = state.cartItems.map((p: any) => {
                if (p.id === action.payload.id) {
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

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
