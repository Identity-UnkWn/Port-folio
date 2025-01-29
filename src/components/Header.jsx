import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  let any = 'bg-clip-text text-transparent bg-gradient-to-r from-white to-[#b0aeaea7] text-[19px] tracking-[2px] pt-[14px] font-[500] cursor-pointer hover:text-white transition duration-450'
  return (
    <div className=' bg-black h-15 fixed w-full z-50  '>
      <div className='flex gap-[30%] ml-[6%] text-white '>
      <span class="bg-clip-text tracking-[5px] text-transparent bg-gradient-to-r from-white to-purple-500 text-[30px] font-[700] pt-[6px] cursor-pointer hover:bg-gradient-to-r hover:from-purple-500 hover:to-white transition duration-450">
        SANJAY KJ
      </span>
        <ul className='flex  justify-center space-x-22'>
          <NavLink to='/'><li className={any}>Home</li></NavLink>
          <NavLink to='/about'><li className={any}>About</li></NavLink>
          <NavLink to='/skills'><li className={any}>Skills</li></NavLink>
          <NavLink to='/project'><li className={any}>Projects</li></NavLink>
          <NavLink to='/contact'><li className={any}>Contact</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Header