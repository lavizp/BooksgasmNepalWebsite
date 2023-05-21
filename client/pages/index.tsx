import ProductCard from '@/components/productCard'
import Wrapper from '@/components/shared/wraper'
import HeroBanner from '@/components/HomePage/heroBanner'
import { fetchDataFromApi } from '@/lib/utils/api'
export default function Home({products}: any) {
  return (
    <main>
        <HeroBanner/>
        <Wrapper>
                        {/* heading and paragaph start */}
                        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Our BestSellers:
                    </div>
                    <div className="text-md md:text-xl">
                        Here are best books picked by our valued customers. Make sure to read them and get intresting customized Bookmarks.😉
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-14 px-5 md:px-20">
                    {products?.data?.slice(0,6).map((product: any) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    
                </div>
                {/* products grid end */}

                {/* Advertisement Layer Start */}
                <div className='rounded-xl w-full bg-black h-36'>
                    .

                </div>
                
                {/* Advertisement Layer End */}

                {/* Catogeries Layer Start */}
                    {/* TODO: Make a scrollable catogeries area */}
                        
                {/* Catogeries Layer End */}
        </Wrapper>
    </main>
  )

  
}
export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
      props: { products },
  };
}
