import React from 'react'
import Button from '../Button'
import { GoArrowUpRight } from "react-icons/go";

const Cities = () => {
  return (
    <div className='container flex items-center justify-between  mx-auto px-[250px]'>
   <div className='flex flex-col  gap-3'>
   <h2 className='text-3xl font-bold text-[#052841]'>Şehirlere Göre İlanlar</h2>
   <p className='text-[#052841]'>Aliquam lacinia diam quis lacus euismod</p>
   </div>
   <Button text={"Tüm Şehirleri Gör"} bgColor={"#2582C1"}  icon={<GoArrowUpRight/>}/>
    </div>
  )
}

export default Cities