import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

function Checkout() {
    const { cartItems } = useSelector((state: any) => state.cart);
    const subTotal: number = useMemo(() => {
        let total = 0;
        cartItems.forEach((element: any) => {
            total += (element.quantity*element.oneQuantity)
        });
        return total
    }, [cartItems]);
  return (
    <div>{subTotal}</div>
  )
}

export default Checkout