import ProductCard from '@/components/productCard'
import Wrapper from '@/components/shared/wraper'
import HeroBanner from '@/components/HomePage/heroBanner'
import { fetchDataFromApi } from '@/lib/utils/api'
import BestSellerSection from '@/components/HomePage/bestSeller'
import AdvertisementSection from '@/components/HomePage/advertisement'
import Image from 'next/image'

export default function Home({products}: any) {
  return (
    <main>
        <HeroBanner/>
        <Wrapper>
                <BestSellerSection products={products.data}/>

                <AdvertisementSection/>

                {/* Catogeries Layer Start */}
                    {/* TODO: Make a scrollable catogeries area */}
                        
                {/* Catogeries Layer End */}
        </Wrapper>
    </main>
  )

  
}
export async function getStaticProps() {
  const dete = await fetchDataFromApi("/api/best-sellers?populate=products.image");
  const products = dete.data[0].attributes.products 
  return {
      props: { products },
  };
}
