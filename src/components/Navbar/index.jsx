import React from 'react'
import logo from "../../../public/logo.svg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='bg-white p-3 justify-between flex items-center container mx-auto px-[250px]'>
<div className='flex gap-4 font-bold items-center'>
        <img src={logo} alt="" />
<a className='navHover'>Anasayfa</a>
<div className='flex items-center gap-1'>
<a className='navHover'>Emlak</a>
<IoMdArrowDropdown/>
</div>
<a className='navHover'>Şirket hakkında</a> 
<div className='flex items-center gap-1'>
<a className='navHover'>Hizmetlerimiz</a>
<IoMdArrowDropdown/>
</div>
<a className='navHover'>iletişim</a>
<a className='navHover'>Yorumlar</a>
<a className='navHover'>Blog</a>
</div>
<div className='flex gap-3 items-center'>
<FaFacebookF className='text-[#006AF7]'/>
<FaTwitter className='text-[#00A2E5]'/>
<FaInstagram className='text-[#E80138]'/>
<FaLinkedinIn className='text-[#0059B1]'/>
</div>
    </div>
  )
}

export default Navbar