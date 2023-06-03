import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../cartItem';

function OrderSection({total, delivery}: {total: number, delivery: number}) {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state: any) => state.cart);

  return (
    <div className="flex flex-col gap-12 py-10 w-[50%]">
                    {/* CART ITEMS START */}
                    <div className="">
                        <div className="text-lg font-bold">
                            Cart Items
                        </div>
                        {cartItems.map((item: any) => (
                            <CartItem key={item.id} data={item} />
                        ))}


                    </div>
                    {/* CART ITEMS END */}

                    {/* SUMMARY START */}
                    <div className="">
                        <div className="text-lg font-bold">Summary</div>

                        <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                            <div className="flex justify-between">
                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                    Subtotal
                                </div>
                                <div className="text-md md:text-lg font-medium text-black">
                                    &#8377;{total}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="uppercase text-sm md:text-md font-medium text-black">
                                    Delivery
                                </div>
                                <div className="text-sm md:text-md font-medium text-black">
                                    &#8377;{delivery}
                                </div>
                            </div>
                            <hr className='bg-black h-1 mx-3 my-2'/>
                            <div className="flex justify-between">
                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                    Total
                                </div>
                                <div className="text-md md:text-lg font-medium text-black">
                                    &#8377;{delivery + total}
                                </div>
                            </div>
                            <div className="text-sm md:text-md py-5 border-t mt-5">
                                The subtotal reflects the total price of
                                your order, including duties and taxes,
                                before any applicable discounts. It does
                                not include delivery costs and
                                international transaction fees.
                            </div>
                        </div>

                        {/* BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                            // onClick={handlePayment}
                        >
                            Checkout
                            {loading && <img src="/spinner.svg" />}
                        </button>
                        {/* BUTTON END */}
                    </div>
                    {/* SUMMARY END */}
                </div>
  )
}

export default OrderSection