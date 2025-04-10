import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannerSwiper =  () => {
  return (
    <Swiper
  
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className='h-[500px]'
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide className='flex items-center justify-center bg-[url("../../../public/slider1.svg")]'>
        <div className='absolute bg-[#052841] opacity-30 w-full h-[500px]'></div>
        <div className='flex flex-col justify-center items-center h-[500px] gap-10 relative z-10'>
        <h1 className=' w-[580px] text-center font-bold  text-6xl text-white'>Kalitesini Garantileyen Tesisler</h1>
        <p className='w-[400px] text-center text-white'>Kınacı Grup, inşaat ve gayrimenkul hizmetleri sektöründe 30 yıllık deneyime sahip bir şirketler topluluğudur.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center bg-[url("../../../public/slider1.svg")]'>
        <div className='absolute bg-[#052841] opacity-30 w-full h-[500px]'></div>
        <div className='flex flex-col justify-center items-center h-[500px] gap-10 relative z-10'>
        <h1 className=' w-[580px] text-center font-bold  text-6xl text-white'>Kalitesini Garantileyen Tesisler</h1>
        <p className='w-[400px] text-center text-white'>Kınacı Grup, inşaat ve gayrimenkul hizmetleri sektöründe 30 yıllık deneyime sahip bir şirketler topluluğudur.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center bg-[url("../../../public/slider1.svg")]'>
        <div className='absolute bg-[#052841] opacity-30 w-full h-[500px]'></div>
        <div className='flex flex-col justify-center items-center h-[500px] gap-10 relative z-10'>
        <h1 className=' w-[580px] text-center font-bold  text-6xl text-white'>Kalitesini Garantileyen Tesisler</h1>
        <p className='w-[400px] text-center text-white'>Kınacı Grup, inşaat ve gayrimenkul hizmetleri sektöründe 30 yıllık deneyime sahip bir şirketler topluluğudur.</p>
        </div>
      </SwiperSlide>

      
    </Swiper>
  );
};

export default BannerSwiper