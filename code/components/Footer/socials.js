import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope } from 'react-icons/fa';
import { IoLogoTableau } from "react-icons/io5";

const socialLinks = [
    {platformName: 'Linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/anesurirwa/'},
    {platformName: 'Kaggle', icon: <FaKaggle />, url: 'https://www.kaggle.com/anesurirwa'},
    {platformName: 'Github', icon: <FaGithub />, url: 'https://github.com/anesu-rirwa'},
    {platformName: 'Tableau', icon: <IoLogoTableau />, url: 'https://public.tableau.com/app/profile/anesu.rirwa/vizzes'},
    {platformName: 'Envelope', icon: <FaEnvelope />, url: '#Envelope'}
];

const Socials = () => {
  return (
    <div className="flex justify-center">
        <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
                <Link 
                    key={index}
                    href={social.url}
                    className={`text-2xl text-white hover:text-blue-400 transition-colors duration-300`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platformName}
                    >
                        {social.icon}
                </Link>
            ))}
        </div>
   </div>
  )
}

export default Socials