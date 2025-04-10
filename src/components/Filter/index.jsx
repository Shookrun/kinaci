import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "../Button";
import { IoSearch } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="relative h-[350px]">
      <div className="container flex flex-col gap-3 m-2 absolute top-[-150px]  z-10   mx-auto px-[250px]">
      <button className="flex items-center w-fit bg-[#ED6B2C] text-white p-3 rounded-xl">
        Türkçe <IoMdArrowDropdown />
      </button>
      <div className="flex items-center justify-between">
       <div className="flex ">
        <button className="bg-white inline-block p-3 rounded-tl-xl">Hepsi</button>
        <button className="bg-white inline-block p-3">Satılık</button>
        <button className="bg-white inline-block p-3 rounded-tr-xl">Kiralık</button>
       </div>
      <div className="flex items-center gap-3">
      <Button text={"Arama İsteğinde Bulun"} bgColor={'#2582C1'} />
       <Button text={"Bir Soru Sor"} bgColor={"#ED6B2C"}/>
       <Button text={"Bilgi Turuna Başla"} bgColor={"#309A87"}/>
       <Button text={"Türk Vatandaşlığı"} bgColor={"#E21743"}/>
      </div>
      </div>
      <div className="bg-white rounded-lg  p-3 flex items-center gap-3">
      <div className="flex  flex-col justify-center gap-2">
        <p>Emlak Tipi</p>
        <select name="" id="" className="border border-[#05284140] rounded-lg   w-[150px] py-3 px-2">
          <option value="">Seçim Yapın</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
        </select>
      </div>
      <div className="flex  flex-col justify-center gap-2">
        <p>Oda Sayısı</p>
        <select name="" id="" className="border border-[#05284140] rounded-lg   w-[130px] py-3 px-2">
          <option value="">Seçim Yapın</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
        </select>
      </div>
      <div className="flex  flex-col justify-center gap-2">
        <p>Şehir</p>
        <select name="" id="" className="border border-[#05284140] rounded-lg   w-[180px] py-3 px-2">
          <option value="">Seçim Yapın</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
        </select>
      </div>
      <div className="flex  flex-col justify-center gap-2">
        <p>Lokasyon</p>
        <select name="" id="" className="border border-[#05284140] rounded-lg   w-[180px] py-3 px-2">
          <option value="">Seçim Yapın</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
          <option value="">Dolma</option>
        </select>
      </div>
      <div className="flex  flex-col justify-center gap-2">
        <p>Fiyat</p>
        <div className="flex items-center">
          <input type="text" placeholder={"0’dan"} className="border border-[#05284140] py-3 w-[80px] rounded-tr-none p-2 rounded-br-none outline-none rounded-md" />
          <input type="text" placeholder={"1000.000.000’a"} className="border border-[#05284140] py-3 w-[120px] outline-none rounded-tl-none rounded-bl-none rounded-md" />
        </div>
      </div>
      <button className="flex items-center bg-[#ED6B2C] w-[90px] mt-7 py-2 text-xl px-2 rounded-md text-white justify-center gap-3"><IoSearch className="font-bold"/> <span>Ara</span></button>
      </div>
    <div className="flex items-center gap-3">
    <p className="flex items-center gap-2"><IoMdArrowDropdown/> Daha fazla filtre</p>
    <p className="text-[#00000040] flex items-center gap-2"> <FaTrash/>Tüm filtreleri sıfırla</p>
    </div>
    </div>
    </div>
  );
};

export default Filter;
