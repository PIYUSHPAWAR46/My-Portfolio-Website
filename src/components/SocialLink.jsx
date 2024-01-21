import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";

const SocialLink = () => {

 const links = [
  {
  id:1,
  child:(<>Linkedin <FaLinkedin size={30}/></>),
  href:"https://www.linkedin.com/in/piyush-pawar-7637351b4/",
  style:"rounded-tr-md",
 },
 {
  id:2,
  child:(
    <>Github <FaGithub size={30}/></>
  ),
  href:"https://github.com/PIYUSHPAWAR46",
 
 },
 {
  id:3,
  child:(
    <>Mail <MdEmail size={30}/></>
  ),
  href:"mailto:piyushpawar46@gmail.com",
 },
 {
  id:4,
  child:(
    <>Resume <MdOutlineContactPage size={30}/></>
  ),
  href:"/PIYUSH PAWAR_CV.pdf",
  style:"rounded-br-md",
  download:true,
 },
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] fixed left-0'>
      <ul>
        {links.map(({id,link,child,href,style, download})=>(
          
        <li key={id} className={"bg-gray-500 p-3 w-40 ml-[-100px] hover:ml-[-5px] duration-300 hover:rounded-md"+ " " + style }>
          <a href={href} className="flex text-white text-xl items-center justify-between  w-full" download={download} target="_blank" rel="noreferrer">
           {child}</a></li>
        ))}
        
      </ul>
    </div>
  )
}

export default SocialLink
