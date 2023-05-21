import React,{useState, useEffect} from 'react'
import { CategoryType } from '@/lib/interfaces/category'
import { fetchDataFromApi } from '@/lib/utils/api'
import { capitaliseFirstLetter } from '@/lib/utils/helper'
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
                        <div>
                            <div className='h-40 w-40 rounded-full bg-slate-400 flex justify-center items-center'>
                                {capitaliseFirstLetter(item.attributes.name)}
                            </div>
                        </div>
                    </Link>
        )}): <div/>}
        </div>
    </div>
  )
}

export default CategorySection
