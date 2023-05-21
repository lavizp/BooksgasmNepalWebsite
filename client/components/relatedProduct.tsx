import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./productCard";
import { BookType } from "@/lib/utils/interfaces/book";
interface Props{
    products: BookType[]
}
const RelatedProducts: React.FC<Props> = ({products}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
            <div className="text-2xl font-bold mb-5">You Might Also Like</div>

            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
                >
                {products?.map((product: any) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}

            </Carousel>
        </div>
    );
};

export default RelatedProducts;