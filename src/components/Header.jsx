import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {

  const [open,setOpen] = useState(false)
  let any = 'bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b0aeaea7] text-[19px] tracking-[2px] pt-[14px] font-[500] cursor-pointer hover:text-white transition duration-450'
  return (
    <div className=' bg-black h-15 fixed w-full z-50  '>
      <div className='flex justify-between text-white px-6 py-3 md:px-12 '>
        <span class="bg-clip-text tracking-[5px] text-transparent bg-gradient-to-r from-white to-purple-500 text-[22px] md:text-[30px] font-[700] pt-[6px] cursor-pointer hover:bg-gradient-to-r hover:from-purple-500 hover:to-white transition duration-450">
          SANJAY KJ
        </span>
        <ul className=' hidden lg:flex space-x-22'>
          <NavLink to='/'><li className={any}>Home</li></NavLink>
          <NavLink to='/about'><li className={any}>About</li></NavLink>
          <NavLink to='/skills'><li className={any}>Skills</li></NavLink>
          <NavLink to='/project'><li className={any}>Projects</li></NavLink>
          <NavLink to='/contact'><li className={any}>Contact</li></NavLink>
        </ul>

        <button className='lg:hidden' onClick={()=>setOpen(!open)}>
          {open ? <FiX/> : <FiMenu/>}
        </button>

      </div>
      {
          open && <div className='lg:hidden bg-black fixed top-15 w-full h-80 z-50'>
            <ul className='flex flex-col justify-center items-center space-y-6'>
              <NavLink to='/'><li className={any} onClick={()=>setOpen(false)}>Home</li></NavLink>
              <NavLink to='/about'><li className={any} onClick={()=>setOpen(false)}>About</li></NavLink>
              <NavLink to='/skills'><li className={any} onClick={()=>setOpen(false)}>Skills</li></NavLink>
              <NavLink to='/project'><li className={any} onClick={()=>setOpen(false)}>Projects</li></NavLink>
              <NavLink to='/contact'><li className={any} onClick={()=>setOpen(false)}>Contact</li></NavLink>
            </ul>
          </div>
        }
    </div>
  )
}

export default Header