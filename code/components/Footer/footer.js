import React from 'react'
import Socials from './socials'

const Footer = () => {
  return (
    <footer className="bg-secondary p-4 text-center">
        <Socials />
        <div>
            <p className='text-gray-600'>&copy; {new Date().getFullYear()} Anesu Rirwa | AI / ML Engineer </p>
        </div>
    </footer>
  )
}

export default Footer