import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
         <div className="">
            <h5 className='text-3xl'>Not Found</h5>
            <NavLink to="/" className="text-yellow">Go Home</NavLink>
        </div>
    </div>
   
  )
}
