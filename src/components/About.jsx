import React from 'react'

const About = () => {
  return (
    <div name ="About" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div  className='max-w-screen-lg mx-auto'>
        
            <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>About</p>
       
        <div className=' p-4 flex flex-col '>
          <p className='text-xl mt-20'>Hey there, I am Piyush Pawar currently learning the tech stacks and joined the society 
          of brilliant tech team members. I am highly enthusiast to learning the software development tools and 
          eager to become good developer. I like to work with frontend development and I have hands on experience in MERN
           stack and Java development.
        </p>
                 <br/>
        <p className='text-xl'> I am currently pursuing Master of Computer Application in 
        Jawaharlal Nehru University, New Delhi, India.<br/>Feel free to explore my portfolio and check out 
        some of the projects I've worked on. If you have any questions or if you'd like to collaborate, don't hesitate to get in touch!
        </p>
        </div>
        </div>
    </div>
  )
}

export default About
