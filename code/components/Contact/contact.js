"use client"

import React, {useState} from 'react'
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope } from 'react-icons/fa';
import { IoLogoTableau } from "react-icons/io5";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Socials from '../Footer/socials';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        // Here you would typically send the form data to your server
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setStatus('Message sent!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('Error sending message.');
        }
      };

    return (
        <section className='flex flex-col items-center justify-center min-h-[90vh] pb-8'>
            <div className='text-center mt-12'>
                    <motion.h2
                      className="text-2xl md:text-4xl font-bold text-white"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Get in Touch
                    </motion.h2>

                    <div className='mt-4'>
                        <Socials textColor={'text-gray-400'}/>
                    </div>

                    <motion.p
                        className="mt-4 text-gray-200 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        I&apos;d love to hear from you. Please fill out the form below to send me an email.
                    </motion.p>
                  </div>

            <div className="container px-10 md:px-6 max-w-xl mx-auto mt-8">
                <div className="px-8 py-4 rounded-lg bg-[#1c1c1c] md:px-10">
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                        <div className='-mx-2 md:items-center md:flex'>
                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label for="firstname" className="block text-sm/6 font-medium text-gray-200">First Name</label>
                                
                                <input type="text" name="firstname" id="firstname" className="block w-full px-5 py-1.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" value={formData.firstname} placeholder="Jane" onChange={handleChange} required/>
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label for="lastname" className="block text-sm/6 font-medium text-gray-200">Last Name</label>

                                
                                <input type="text" name="lastname" id="lastname" className="block w-full px-5 py-1.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" value={formData.lastname} placeholder="Smith" onChange={handleChange} required/>
                            </div>
                        </div>

                        <div className="mt-2">
                            <label for="email" className="block text-sm/6 font-medium text-gray-200">Your Email</label>
                        
                            <input type="email" name="email" id="email" className="block w-full px-5 py-1.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" value={formData.email} placeholder="janesmith@xyz.com" onChange={handleChange} required/>
                        </div>

                        <div className="col-span-full">
                            <label for="message" className="block text-sm/6 font-medium text-gray-200">Your Message</label>
                            <div className="mt-2">
                                <textarea name="message" id="message" rows="3" className="block w-full h-32 px-5 py-1.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-40 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" value={formData.message} onChange={handleChange} required></textarea>
                            </div>

                            <div className="mt-4 flex items-center justify-end gap-x-6">
                                <button type="submit" className="px-2 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
