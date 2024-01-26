import { useState } from "react"
import {FaTimes, FaBars} from "react-icons/fa"
import { Link } from "react-scroll";

const Navbar = () => {


    const [menu,setMenu] = useState(false);

 const navlink = [
    {
        id:1,
        link:'Home'
    },
    {
        id:2,
        link:'About'
    },
    {
        id:3,
        link:'Portfolio'
    },
    {
        id:4,
        link:'Experience'
    },
    {
        id:5,
        link:'Contact'
    }
 ]

  return (
    <div className='bg-black text-white h-20 w-full flex items-center justify-between px-4 fixed'>
        <div>
        <h1 className='font-topleftfont ml-2 text-4xl bg-white text-black rounded-lg p-2'>PIYUSH PAWAR</h1>
        </div>
      <ul className='hidden md:flex'>
        {navlink.map(({id,link})=>(

        <li  key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500
         hover:scale-105 duration-200'>
         <Link to={link} smooth duration = {500}>{link}</Link> 
          </li>

        ))}
        
      </ul>
      <div onClick={()=>setMenu(!menu)} className="pr-4 cursor-pointer text-gray-500 z-10 md:hidden">
            {menu ? <FaTimes size={30}/>: <FaBars size={30}/>}
      </div>

      {menu && (

      <ul className=" flex flex-col justify-center items-center
       absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        
        {navlink.map(({id,link})=>(

<li  key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
<Link onClick={()=>setMenu(!menu)} to={link} smooth duration = {500}>{link}</Link>
  </li>

))}
      </ul>
      )}
    </div>
  )
}

export default Navbar
