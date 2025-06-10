import React from 'react'
import Socials from './socials'

const Footer = () => {
  return (
    <footer className='flex flex-row items-center justify-center space-x-10 min-h-[10vh] bg-gray-800'>
      <p className='text-white text-sm font-bold'>Anesu Rirwa</p>

      <p className='text-white text-2xl'>|</p>

      <Socials />
    </footer>
  )
}

export default Footer