import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='w-full flex justify-end relative padding-container max-container'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src={"/phone.png"}
            width={440}
            height={1000}
            className='feature-phone'
            alt='phone'
          />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src={"/camp.svg"}
              width={50}
              height={50}
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
              alt='camp' />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 '>
            {
              FEATURES.map((feature)=>(
                <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon = {feature.icon}
                description = {feature.description}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
type FeatureItems={
  title:string,
  icon:string,
  description:string
}
const FeatureItem =({title,icon,description}:FeatureItems)=>{
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50'>
      <Image src={icon} alt="map" width={28} height={28} />      
      </div>
      <h2 className='mt-5 bold-20 capitalize lg:bold-32'>
        {title}
      </h2>
      <p className='regular mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}
export default Features