import { NavLink, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className=" h-screen">
        <div className="grid h-full w-full lg:grid-cols-2">
            
            {/* The content half */}
            
            <div className="flex flex-col justify-center items-center">

                <div className=" w-full px-4 mx-auto lg:w-2/3">
                    <NavLink to="/" className="home-link text-center">
                        <img src="./images/logo.png" alt="" className="h-8" />
                    </NavLink>
                    <Outlet/>
                </div>

            </div>
            
            {/* The image half */}
            <div className="bg-local hidden lg:block" style={{ backgroundImage:`url('/images/large.png')`}}></div>
        </div>
    </div>
  )
}
