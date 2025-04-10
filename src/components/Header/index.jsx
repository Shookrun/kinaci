import React, { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import flag from "../../../public/flag.svg";
import az from "../../../public/azerbaijan.png";
import usa from "../../../public/usa.png";
import rus from "../../../public/russia.png";
import Button from "../Button";

const Header = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="bg-[#E9F3F9] flex p-2 justify-between container mx-auto px-[250px] gap-3 items-center">
      <div className="flex items-center gap-3">
        <HiBars2 className="text-xl" />
        <Button text={"info@kinacigroup.com"} bgColor={"#2582C1"} icon={ <IoMailOutline />}   />
        <Button icon={<LuPhone />} bgColor={"#ED6B2C"} text={"+90(544) 138 07 07"} />
        <div className="flex items-center gap-1 bg-white text-[#ED6B2C] border-2 rounded-lg p-1 px-4 border-[#ED6B2C]">
          <MdOutlineDateRange />
          <p className="font-bold">Randevu Al</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center relative bg-[#E21743] text-white p-1 px-4 rounded-lg gap-2">
          <p>Beğendiklerim</p>
          <div>
            <FaHeart className="text-xl" />
            <span className="inline-block absolute top-1 right-1 font-bold bg-white border-2 border-[#E21743] text-[#E21743] rounded-full text-[5px] p-[3px] px-[5px]">
              5
            </span>
          </div>
        </div>
          
        <div className="bg-white relative flex items-center cursor-pointer select-none rounded-md py-1 px-2 gap-2">
          <MdKeyboardArrowDown onClick={()=> setOpen(!open)} />
          <img src={flag} alt="" />
          <p className="text-[#052841] font-bold ">Türkçe</p>
          {
            open &&(
              <div className="absolute bg-white w-[200px] shadow-2xl gap-3 flex flex-col rounded-lg top-[35px] z-10 p-4">
              <div className="flex gap-2 items-center ">
                <img className="w-[30px]" src={az} alt="" />
                <p>Azerbaijan</p>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[30px]" src={usa} alt="" />
                <p>United States</p>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[30px]" src={rus} alt="" />
                <p>Russia</p>
              </div>
            </div>
            )
          }
         
        </div>

        <div className="bg-white flex items-center rounded-md py-1 px-2 gap-2">
          <MdKeyboardArrowDown />

          <p className="text-[#052841] font-bold ">TRY</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
