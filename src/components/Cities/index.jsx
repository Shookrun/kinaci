import React from 'react'
import Button from '../Button'
import { GoArrowUpRight } from "react-icons/go";

const Cities = () => {
  return (
    <div className='container  mx-auto px-[250px]'>
   <div>
   <h2 className='text-3xl font-bold text-[#052841]'>Şehirlere Göre İlanlar</h2>
   <p className='text-[#052841]'>Aliquam lacinia diam quis lacus euismod</p>
   <Button text={"Tüm Şehirleri Gör"} bgColor={"#2582C1"} icon={"GoArrowUpRight"}/>
   </div>
    </div>
  )
}

export default Cities