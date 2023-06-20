import React, { useState } from 'react'
import { styles } from '../style'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`${styles.paddingX} w-full flex items-center bg-primary p-5 fixed top-0 z-20`}>
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <Link
          to={'/'}
          className='flex gap-2 items-center'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white font-bold text-[18px]'>Muneeb Rana</p>
        </Link>
        <ul className='list-none hidden sm:flex gap-8'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.id ? 'text-white' : 'text-secondary'} text-[18px] hover:text-white`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="" onClick={() => setToggle(!toggle)} className='w-[26px] h-[26px] cursor-pointer object-contain' />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.id ? 'text-white' : 'text-secondary'}  hover:text-white`}
                  onClick={() => {setActive(link.id); setToggle(false)}}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar