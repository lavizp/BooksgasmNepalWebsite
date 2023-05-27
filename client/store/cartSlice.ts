import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "@/lib/interfaces/book";
import { saveState, loadState } from "@/lib/utils/localStorage";

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
    cartItems: loadState() || []
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
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            saveState(state.cartItems)

        },
        updateCart: (state: any, action: PayloadAction<UpdateCartType>) => {
            state.cartItems = state.cartItems.map((p: any) => {
                if (p.id === action.payload.id) {
                    let dt =  { ...p, [action.payload.key]: action.payload.val };
                    saveState(dt)
                    return dt
                }
                return p;
            });
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (p: any) => p.id !== action.payload.id
            );
            saveState(state.cartItems)


        },

    },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
