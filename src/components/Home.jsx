import React from 'react'
import MyImage from "../assests/Myimage.jpg"
import { TiArrowRightThick } from "react-icons/ti";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="Home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
        <div className='h-full flex flex-col justify-center'>
            <h2 className='text-4xl sm:text-7xl font-bold max-w-md text-white'>I'am a Full Stack Developer</h2>
            <p className='text-gray-500 py-4'>Hey there, I'm Piyush Pawar, a dedicated and 
            passionate software developer. With a keen interest in creating innovative 
            solutions, I specialize in HTML, CSS, Javascript, Tailwind CSS, React, Node, Mongodb, Java.
             Here's a glimpse into who I am and what I bring to the world of software development.</p>
                <div>
                    <Link to="Contact" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio  
                    <span className=' group-hover:rotate-90 duration-150 ml-1'><TiArrowRightThick size={20}/></span></Link>
                </div>
        </div>
        <div>
        <img className=' w-32 h-auto rounded-2xl md:w-1/3 ' src ={MyImage} alt='MyProfile'/>
        </div>
        
      </div>
    </div>
  )
}

export default Home
