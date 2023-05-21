import React from 'react'
import ProductCard from '../productCard'
import { BookType } from '@/lib/utils/interfaces/book'
interface Props{
    products: BookType[]
}
const BestSellerSection:React.FC<Props> =({products})=> {
  return (
    <>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Our BestSellers:
            </div>
            <div className="text-md md:text-xl">
                Here are best books picked by our valued customers. Make sure to read them and get intresting customized Bookmarks.😉
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-14 px-5 md:px-20">
                        {products?.map((product: any) => (
                            <ProductCard key={product?.id} data={product} />
                            ))}

                    </div>
    </>
  )
}

export default BestSellerSection