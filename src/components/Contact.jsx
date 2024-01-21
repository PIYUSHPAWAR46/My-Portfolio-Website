import React from 'react'

const Contact = () => {
  return (
    <div name = "Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className=''>
            <p className='text-4xl font-bold border-gray-500 border-b-4 inline'>Contact</p>
            <p className='py-4'>Submit the form below to get in touch with me:</p>
        </div>
        <div className='flex justify-center'>
            <form className=" flex flex-col w-full md:w-1/2" action="https://getform.io/f/4bf479bd-b10e-402e-bd5f-27269f6121b1" method='POST'>
                <input className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" type="text"  placeholder='Enter your name' name="name"/>
                <input type="text" placeholder='Enter your Email' className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="email"/>
                <textarea placeholder='Enter your message'  rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="message"></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Send it!</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
