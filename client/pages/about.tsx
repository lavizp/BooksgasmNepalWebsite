import React from 'react'
import Wrapper from '@/components/shared/wraper'
import Image from 'next/image'

const images= [
  "https://images.unsplash.com/photo-1684697136517-2a1a88e5e02d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1684419081530-d0dd7ed6921a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1684707973359-8f9c35e99afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1684703124625-b7be45105740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"


]

function About() {


  return (
    <Wrapper>

    <div className='flex flex-wrap-reverse justify-around my-10 md:text-6xl text-4xl items-center'>
      <div className='md:w-[50%] w-[70%] text-center md:text-left'>
        <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold'>We</span> are Nepals most reliable online bookstore.
      </div>
      <Image src="/logo1.png" height={300} width={300} alt="logo"/>
    </div>
    <div className="flex flex-row gap-4 md:justify-between justify-center md:my-40 my-20">
      {images.map((item,index)=>
            <div className={`md:w-64 md:h-[28rem] w-24 h-36 relative ${index%2==0? "translate-y-6": "-translate-y-6"}`} key={index}>
              <Image src={item}  alt='pic' fill className='object-cover rounded-2xl'/>
            </div>
      )}

    </div>
    <div className='mb-10 text-center'>
      <h2 className='md:text-6xl text-2xl mb-6'>About Booksgasm Nepal</h2>
      <span className='md:text-xl text-sm leading-8'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore recusandae iste quo molestias ut, non id quam sapiente voluptas debitis voluptatibus perspiciatis, maiores laborum officia eum dolorem hic, consequatur omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique blanditiis minus eum impedit? Illo ipsum, quidem similique consectetur odio tenetur eum itaque distinctio vitae, natus, nobis unde nihil harum voluptate.
      </span>
    </div>

    <div className='mb-4'>
      <h2 className='md:text-6xl text-2xl mb-6 text-center'>Our Virtues</h2>
    </div>

    </Wrapper>
  )
}

export default About