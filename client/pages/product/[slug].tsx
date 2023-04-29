import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from '@/components/wraper';
import ReactMarkdown from "react-markdown";
import Image from 'next/image';
import RelatedProducts from '@/components/relatedProduct';

export default function ProductDetail(){
    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    };
  return (
    <div className="w-full md:py-20">
    <ToastContainer />
    <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* Left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <Image src="/book.webp" width="500" height="300" alt='image' />
            </div>
            {/* left Column End */}
            {/* right column start */}
            <div className="flex-[1] py-3">
                {/* PRODUCT TITLE */}
                <div className="text-[34px] font-semibold mb-2 leading-tight">
                    Name
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-lg font-semibold mb-5">
                    Subtitle
                </div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold">
                        MRP : &#8377;Price
                    </p>
                    {true && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;OriginalPrice
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {/* {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )} */}10
                                % off
                            </p>
                        </>
                    )}
                </div>

                <div className="text-md font-medium text-black/[0.5]">
                    incl. of taxes
                </div>
                <div className="text-md font-medium text-black/[0.5] mb-20">
                    {`(Also includes all applicable duties)`}
                </div>

                {/* ADD TO CART BUTTON START */}
                <button
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                    onClick={() => {
                            // dispatch(
                            //     addToCart({
                            //         ...product?.data?.[0],
                            //         selectedSize,
                            //         oneQuantityPrice: p.price,
                            //     })
                            // );
                            notify();
            
                    }}
                >
                    Add to Cart
                </button>
                {/* ADD TO CART BUTTON END */}

                {/* WHISHLIST BUTTON START */}
                <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                    Whishlist
                    <IoMdHeartEmpty size={20} />
                </button>
                {/* WHISHLIST BUTTON END */}

                <div>
                    <div className="text-lg font-bold mb-5">
                        Product Details
                    </div>
                    <div className="markdown text-md mb-5">
                        <ReactMarkdown>Description</ReactMarkdown>
                    </div>
                </div>
            </div>
            {/* right column end */}
        </div>

        {/* <RelatedProducts products={products} /> */}
        <RelatedProducts/>
    </Wrapper>
</div>
  )
}
