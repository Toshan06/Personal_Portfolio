import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectsCard = (props) => {
  return (
    <div className='p-1 rounded-xl bg-gradient-to-b from-gray-900 to-blue-900'>
      <div className='project-card flex flex-col justify-center items-center hover:bg-blue-900 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105'>
        <img src={props.imgsrc} alt="image" className='rounded-xl'/>
        <h1 className='project-title text-3xl text-yellow-300 font-bold p-3'>{props.title}</h1>
        <div className='project-details text-lg text-gray-100 '>
          <p>{props.text}</p>
          <div className='pro-btns flex flex-row justify-between'>
            <NavLink to={props.view} className="btn hover:bg-green-500 hover:text-white ease-in-out duration-500 hover:transform hover:translate-y-1 hover: scale-105 bg-[rgb(255,255,0)] text-black border-2 px-3 py-2 font-semibold text-lg rounded-xl">VIEW</NavLink>
            <NavLink to="url.com" className="btn hover:bg-green-500 hover:text-white ease-in-out duration-500 hover:transform hover:translate-y-1 hover: scale-105 bg-[rgb(255,255,0)] text-black border-2 px-3 py-2 font-semibold text-lg rounded-xl">SOURCE</NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsCard

