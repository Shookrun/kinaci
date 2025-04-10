import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CitiesSwiper = () => {
  const mockData = [
    {
      id: 1,
      img: "/antalya.png",
      title: "Antalya",
      desc: "23 Fırsat",
    },
    {
      id: 2,
      img: "/istanbul.png",
      title: "Istanbul",
      desc: "23 Fırsat",
    },
    {
      id: 3,
      img: "/izmir.png",
      title: "İzmir",
      desc: "23 Fırsat",
    },
    {
      id: 4,
      img: "/aydin.png",
      title: "Aydın",
      desc: "23 Fırsat",
    },
    {
      id: 5,
      img: "/izmir.png",
      title: "İzmir",
      desc: "23 Fırsat",
    },
    {
      id: 6,
      img: "/istanbul.png",
      title: "İstanbul",
      desc: "23 Fırsat",
    },
    {
      id: 7,
      img: "/izmir.png",
      title: "İzmir",
      desc: "23 Fırsat",
    },
    {
      id: 8,
      img: "/antalya.png",
      title: "Antalya",
      desc: "23 Fırsat",
    },
    {
      id: 9,
      img: "/antalya.png",
      title: "Antalya",
      desc: "23 Fırsat",
    },
    {
      id: 10,
      img: "/izmir.png",
      title: "İzmir",
      desc: "23 Fırsat",
    },
  ];
  return (
   <div className="container mx-auto px-[250px] mt-[60px]">
     <Swiper
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay ={{
        delay:900,
        disableOnInteraction: false,
      }}
      className="h-[500px]"
      pagination={{ clickable: true }}
 
    >
      {mockData.map(({ id, img, title, desc }) => (
        <SwiperSlide  key={id}>
          <div
          style={{ backgroundImage: `url(${img})`,width:"250px" }}
            className={`h-[350px] text-center rounded-xl relative bg-cover flex flex-col items-center text-white`}
          >
            <div className="p-4 flex flex-col gap-2">
              <h2 className="relative z-10 text-2xl font-bold">{title}</h2>
              <p className="relative z-10">{desc}</p>
            </div>
            <div className="bg-[#0528414D] w-[100%] h-[350px] absolute rounded-xl"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
};

export default CitiesSwiper;
