import React from 'react'
import Socials from './socials'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center min-h-[10vh] bg-gray-800 border'>
      <Socials />
      
      <p className='text-white text-sm mt-3'>&copy; {new Date().getFullYear()} Anesu Rirwa | AI / ML Engineer </p>
    </footer>
  )
}

export default Footer