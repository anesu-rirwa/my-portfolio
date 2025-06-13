import React from 'react'
import Socials from './socials'

const Footer = () => {
  return (
    <footer className='flex flex-row items-center justify-center space-x-10 min-h-[10vh] bg-[#0f0f0f]'>
      <p className='text-gray-200 text-sm font-bold'>Anesu Rirwa</p>

      <p className='text-gray-200 text-2xl'>|</p>

      <Socials textColor={'text-gray-200'}/>
    </footer>
  )
}

export default Footer