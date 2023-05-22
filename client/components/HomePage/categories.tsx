import React,{useState, useEffect} from 'react'
import { CategoryType } from '@/lib/interfaces/category'
import { fetchDataFromApi } from '@/lib/utils/api'
import { capitaliseFirstLetter } from '@/lib/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
const CategorySection: React.FC=()=> {
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

    const [categories, setCategories] = useState<CategoryType[]>()
    useEffect(()=>{
        const getCategories = async()=>{
            const {data} = await fetchDataFromApi("/api/categories?populate=*")
            setCategories(data)
        }
        getCategories()
    },[])
  return (
    <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Categories:
            </div>
            <div className="text-md md:text-xl mb-5">
                Pick your favourite genre and categories:
            </div>

        <div className='flex gap-10 justify-center '>

            {categories? categories.map((item: CategoryType)=> {
                return(
                    <Link key={item.id} href={`/category/${item.attributes.slug}`}>
                        <div className="flex justify-center items-center hover:scale-110 transition-transform duration-300">
                          <div className="relative w-40 h-40 rounded-full overflow-hidden">
                            <Image src={item.attributes.image} alt="Your Image" className="w-full h-full object-cover" width={500} height={500}/>
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
                              <span className="text-white text-xl font-bold">{capitaliseFirstLetter(item.attributes.name)}</span>
                            </div>
                          </div>
                        </div>
                    </Link>
        )}): <div/>}
        </div>
    </div>
  )
}

export default CategorySection
