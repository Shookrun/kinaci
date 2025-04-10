import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { GiResize } from "react-icons/gi";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa6";
const Announcements = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/houses").then(res=>res.json()).then((data)=>setData(data))
    },[])
  return (
    <div className='bg-[#d0e1ec] container mx-auto py-10 px-[250px]'>
        <div className='flex items-center justify-between'>
            <div className='text-[#052841] flex flex-col gap-2'>
            <h2 className=' text-3xl font-bold'>Yeni Gayrimenkuller</h2>
            <p className=''>Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div className='flex gap-3'>
            <button className='inline-block bg-[#ED6B2C] border border-[#ED6B2C] text-white py-2 px-4 rounded-lg'>Satılık</button>
            <button className='inline-block  py-2 px-4 border-2 text-[#ED6B2C] border-[#ED6B2C] rounded-lg'>Kiralık</button>
            </div>
        </div>
        <div className='flex flex-wrap justify-between gap-6 mt-10'>
            {data.map(({id,img,title,location,price,minprice,rooms,kvmetr,bathroom,bedroom})=>(
                <div className='w-[30%]  bg-white rounded-lg'>
                <div className='flex flex-col justify-between rounded-bl-lg rounded-br-lg' style={{
                     backgroundImage: `url(${img})`, //
                     height:"280px",
                     backgroundSize:"cover",
                     backgroundPosition:"center",
                     padding:"15px"
                }}>
                    <div className='flex items-center justify-between'>
                    <FaRegHeart className='text-xl text-red-500'/>
                    <div className='bg-[#00A2E5]  text-white rounded-md  px-2'>
                        <p>YENİ</p>
                    </div>
                    </div>
                    <div className='flex items-center justify-between'>
                    <div className='bg-[#ED6B2C] w-fit  text-white px-2 rounded-lg py-1'>
                        <p>{id}</p>
                    </div>
                    <MdPhotoCamera className=' text-2xl text-white'/>
                    
                    </div>
                </div>
                    <div className='p-3 flex flex-col gap-5'>
                    <h2 className='text-[#052841] font-bold text-sm'>{title}</h2>
                    <div className='flex gap-4 items-end'>
                   <div className='flex flex-col gap-2'>
                   <p className='text-sm'>{location}</p>
                   <div className='flex items-center  flex-wrap justify-between w-[130px]'>
                    <p className='flex items-center gap-2'><GoHome/> {rooms}</p>
                    <p className='flex items-center gap-2'><GiResize/>{kvmetr}</p>
                    <p className='flex items-center gap-2'><LuBedDouble/> {bedroom}</p>
                    <p className='flex items-center gap-2   w-[50px]'><FaShower/> {bathroom}</p>
                    
                   </div>
                   </div>
                   <div className='flex flex-col justify-center gap-2'>
                    <p className='text-sm'>{minprice}'dan itibaren</p>
                    <button className='bg-[#2582C1] text-white py-1 px-8 rounded-lg'>
                    {price}
                    </button>
                   </div>
                    </div>
                   <div className='flex items-center justify-between'>
                   <button className='border border-[#05284180] text-[#052841] font-bold py-1 px-5 rounded-lg'>Hızlı İletişim</button>
                   <button className='border border-[#ED6B2C] text-[#ED6B2C] font-bold py-1 px-9 rounded-lg'>Detaylar</button>
                   </div>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Announcements