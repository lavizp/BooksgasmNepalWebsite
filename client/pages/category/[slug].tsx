import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Wrapper from '@/components/shared/wraper';
import ProductCard from '@/components/productCard';
import useSWR from "swr";
import { fetchDataFromApi } from '@/lib/utils/api';
import { BookType } from "@/lib/utils/interfaces/book";
import { CategoryType } from "@/lib/utils/interfaces/category";
const maxResult = 3;


interface Props{
    category: {data: CategoryType[]},
    products: BookType[],
    slug: string
}
const Category: React.FC<Props>=({ category, products, slug })=>{
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
        fetchDataFromApi,
        {
            fallbackData: products,
        }
    );
  return (
    <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category.data[0].attributes.name}
                        
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-20">
                    {data?.data?.map((product: any) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}

                {/* PAGINATION BUTTONS START */}
                {data?.meta?.pagination?.total > maxResult && (
                    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button>

                        <span className="font-bold">{`${pageIndex} of ${
                            data && data.meta.pagination.pageCount
                        }`}</span>

                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={
                                pageIndex ===
                                (data && data.meta.pagination.pageCount)
                            }
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {/* PAGINATION BUTTONS END */}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )}
            </Wrapper>
        </div>
  )
}
export default Category

export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/categories?populate=*");
    const paths = category?.data?.map((c: any) => ({
        params: {
            slug: c.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }: any) {
    const category = await fetchDataFromApi(
        `/api/categories?filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
    );
    return {
        props: {
            category,
            products,
            slug,
        },
    };
}
