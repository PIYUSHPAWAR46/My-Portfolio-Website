import React from 'react'
import dicegame from '../assests/dicegame1.png'

const Portfolio = () => {


    const portfolios=[
        {
            id:1,
            src: dicegame,
            lin:"https://github.com/PIYUSHPAWAR46/Projects/tree/master/Dice_Game",
    },
  
]


    
  return (
    <div  name ="Portfolio" className=' text-white bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen md:h-screen'>
      <div  className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
            <p className=' text-4xl border-b-4 border-gray-500 inline font-bold '>Portfolio</p>
            <p className='py-6'>Check out some of my works right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id,src,lin})=>(

        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
           
                <img  src={src} alt="" className='hover:scale-90 duration-200  rounded-lg' />
           <div className='flex items-center justify-center'>
            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
           
           </div>

        </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
