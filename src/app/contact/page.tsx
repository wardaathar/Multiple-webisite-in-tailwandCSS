import React from 'react'

const Contact = () => {
  return (
  <div className="hero h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('proxy-image.png')" }}>
    <section className='contact-form border  max-w-lg mx-auto my-20 p-8 bg-white  shadow-md rounded-md'>
      <h2 className='bold fade-in'>Contact Now</h2>
      <form>
        <input type='text' placeholder=' Your Name' className='w-full mb-4 py-2 border-blue-500 rounded-md' required/>
        <input type='email' placeholder='Email Address' className='w-full mb-4 py-2 border-blue-500 rounded-md'required/>
        <input type='text' placeholder='Phone Number' className='w-full mb-4 py-2 border-blue-500 rounded-md'required/>
        <textarea placeholder='your message' className='w-full mb-4 py-2 border-blue-500 rounded-md' rows={5} required></textarea>
        <button type='submit'className='w-full h-15 p-2 text-black  hover:bg-slate-600 bg-blue-500 rounded-md' >Send Message</button>
       </form>
       </section>
    </div>
  );
};

export default Contact