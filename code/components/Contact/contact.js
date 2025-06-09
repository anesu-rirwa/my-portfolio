"use client"

import React, {useState} from 'react'

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
        <section className='flex flex-col items-center justify-center min-h-[90vh]'>
            <h1 className="text-3xl font-bold text-center pt-12">Get In Touch</h1>

            <div className="w-[30%] bg-gray-50 p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-center ">Email Me</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <div class="mt-2">
                        <label for="username" class="block text-sm/6 font-medium text-gray-900">Your Name</label>

                        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 mt-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        
                        <input type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" value={formData.name} placeholder="Jane Smith" onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="mt-2">
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Your Email</label>
                        
                        <div class="flex items-center rounded-md bg-white mt-1 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        

                        <input type="email" name="email" id="email" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" value={formData.email} placeholder="janesmith@xyz.com" onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="message" class="block text-sm/6 font-medium text-gray-900">Your Message</label>
                        <div class="mt-2">
                            <textarea name="message" id="message" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" value={formData.message} onChange={handleChange} required></textarea>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
                        </div>
                    </div>
                </form>
                {status && <p className="mt-2">{status}</p>}
            </div>

            <div>
                <h2>My Socials</h2>
                
            </div>
        </section>
    )
}

export default Contact