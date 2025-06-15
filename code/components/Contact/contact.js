'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Socials from '../Footer/socials';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ text: '', type: '' });

  const isValidEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setStatus({ text: '❌ Please enter a valid email address.', type: 'error' });
      return;
    }

    setStatus({ text: '📨 Sending your message...', type: 'loading' });

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus({ text: '✅ Message sent successfully!', type: 'success' });
        setFormData({ firstname: '', lastname: '', email: '', message: '' });
      } else {
        setStatus({ text: '⚠️ Failed to send message. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({ text: '🚫 Error sending message. Try later.', type: 'error' });
    }
  };

  return (
    <section id='contact-me' className='flex flex-col items-center justify-center p-6 px-4'>
      <div className='text-center md:my-12'>
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-200 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className='mt-4'>
          <Socials textColor={'text-gray-400'} />
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

      <div className="container px-10 md:px-6 max-w-xl mx-auto mt-6 sm:mt-0">
        <div className="px-8 py-4 rounded-lg bg-[#1c1c1c] md:px-10">
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className='-mx-2 md:items-center md:flex'>
              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-200">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                  className="block w-full px-5 py-1.5 mt-2 bg-white text-gray-700 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-200">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                  className="block w-full px-5 py-1.5 mt-2 bg-white text-gray-700 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-5 py-1.5 mt-2 bg-white text-gray-700 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-5 py-1.5 mt-2 bg-white text-gray-700 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400"
              />
            </div>

            <div className="mt-4 flex items-center justify-between flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                Send Message
              </button>

              {status.text && (
                <p
                  className={`text-sm font-medium ${
                    status.type === 'success'
                      ? 'text-green-400'
                      : status.type === 'error'
                      ? 'text-red-400'
                      : 'text-blue-400'
                  }`}
                >
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
