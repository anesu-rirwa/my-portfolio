import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    {platformName: 'Linkedin', icon: <FaLinkedin />, url: '#Linkedin', color: '#0077B5', hoverColor: '#005F91'},
    {platformName: 'Github', icon: <FaGithub />, url: '#Github', color: '#24292e', hoverColor: '#1A1D21'},
    {platformName: 'Kaggle', icon: <FaKaggle />, url: '#Kaggle', color: '#38BDFC', hoverColor: '#2C9ADF'},
    {platformName: 'Envelope', icon: <FaEnvelope />, url: '#Envelope', color: '#4c4e50', hoverColor: '#1A1D21'}
];

const Socials = () => {
  return (
    <div className="flex justify-center">
        <div className="flex justify-center space-x-5 mt-4">
            {socialLinks.map((social, index) => (
                <Link 
                    key={index}
                    href={social.url}
                    className={`text-2xl bg-[${social.color}] hover:bg-[${social.hoverColor}]`}
                    >
                        {social.icon}
                </Link>
            ))}
        </div>
   </div>
  )
}

export default Socials