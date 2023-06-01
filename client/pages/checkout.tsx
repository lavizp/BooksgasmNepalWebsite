import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '@/components/shared/wraper';

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
    <Wrapper>

    </Wrapper>
  )
}

export default Checkout