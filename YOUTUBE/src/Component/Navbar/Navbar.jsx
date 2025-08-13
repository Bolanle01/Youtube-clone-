import React from 'react'
import logo_icon from '../../assets/Logo.png';
import { VscMenu } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { VscMicFilled } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

const Navbar = ({setSidebar}) => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search?q=${encodeURIComponent(search)}`);
    };

  return (

    <nav className='flex-div p-0 h-16 sticky gap-10 lg:gap-20 top-0 z-20 px-5 py-2.5 flex-shrink-0 flex justify-between items-center bg-white'>
        <div className='nav-left cursor-pointer gap-4 items-center flex-div justify-between  flex text-center'>
            <button><VscMenu className='w-6 h-10 mr-5 cursor-pointer sm:block hover:bg-gray-200' onClick={()=>setSidebar(prev=>prev===false?true:false)} /></button>
            <Link to='/'><img className='logo' src={logo_icon} alt="" /></Link>
        </div>     

        <div onSubmit={handleSubmit} className="nav-middle flex-div justify-between flex items-center">
            <div className='search-bar flex border w-[550px]  border-gray-300 rounded-2xl mr-4 py-1.5 px-3 flex-div justify-between items-center'>
               <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-[500px] border-none rounded"
               />
                <button type="submit" className="bg-gray-200 h-8 cursor-pointer text-white px-4 py-1 rounded">
                  <BsSearch className='text-black h-8 w-6' />
                </button>
           </div>
            <VscMicFilled className='w-6 h-6 cursor-pointer hover:bg-gray-200' />
        </div>

        <div className="nav-right flex-div justify-between gap-6 flex items-center ml-5">
            <button className='flex items-center cursor-pointer text-md font-semibold text-sm justify-between bg-gray-100 hover:bg-gray-200 rounded-3xl h-10 px-4 gap-3'>
                <VscAdd className="w-5 h-8" />Create
            </button>
            <VscBell className="w-6 h-6 cursor-pointer hover:bg-gray-200" />
            <VscAccount className="w-6 h-6 cursor-pointer" />
        </div>

    </nav>

  )
}

export default Navbar
