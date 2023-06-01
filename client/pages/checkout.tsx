import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '@/components/shared/wraper';
import Form from '@/components/checkout/form';
import OrderSection from '@/components/checkout/orderSection';
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
      <div className='flex flex-col-reverse lg:flex-row'>
        <Form/>
        <OrderSection/>

      </div>

    </Wrapper>
  )
}

export default Checkout