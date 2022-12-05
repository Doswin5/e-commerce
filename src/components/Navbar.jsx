import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import { BsCartCheck } from 'react-icons/bs'

const Navbar = ({ totalItems }) => {
  const location = useLocation()
  return (
    <nav className="w-full flex justify-between px-[100px] items-center h-[80px]">
      <Link to='/'>
        <img src={logo} alt="" className="logo" />
      </Link>
      {
        location.pathname === '/' && (
        <Link to='/cart'>
          <div className='relative p-2 cursor-pointer hover:bg-gray-300 hover:rounded-full'>
            <BsCartCheck className='icon' />
            <div className='badge'>
              <span className='items'>{totalItems}</span>
            </div>
          </div>
        </Link>
        )
      }
    </nav>
  )
}

export default Navbar