import { useAuth } from "auth/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Header() {

  const { token,setToken } = useAuth();
  const navigate = useNavigate();

  // Swal.fire({
  //   title: "Deleted!",
  //   text: "Your file has been deleted.",
  //   icon: "success"
  // });

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "teal",
      cancelButtonColor: "maroon",
      confirmButtonText: "Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        setToken();
        navigate("/", { replace: true });
      }
    });
  };
  
  return (
    <header className=" px-3 py-4 lg:px-3 lg:py-5">
        <div className="flex justify-between items-center py-2">
          <img src= { process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" className="h-4" onClick={ () => navigate('/') }/>

            { !token && 
                <ul className="flex items-center mb-0">
                    <li><NavLink className="  mr-3 py-2 px-3 hover:text-yellow hover:no-underline hover:ring-1 hover:ring-offset-1 hover:ring-yellow hover:rounded-md" to='/login'>Login</NavLink></li>
                    <li><NavLink className="rounded-md bg-yellow text-gray-800 px-3 py-2  border-2 border-yellow hover:bg-dark-bg hover:no-underline hover:text-yellow " to='/register'>Register</NavLink></li>
                </ul>
            }

            { token &&
                <ul className="flex items-center mb-0">
                    <li><NavLink className="px-2 hover:no-underline hover:text-yellow hover:" to='/my-bets'>Bets</NavLink></li>
                    <li><NavLink className="px-2 hover:no-underline hover:text-yellow hover:" to='/profile'>Profile</NavLink></li>
                    <li><span className="px-3 py-2  cursor-pointer rounded bg-yellow text-gray-800" onClick={ () => handleLogout() }>Logout</span></li>
                </ul>
            }
            
        </div>
    </header>
  )
}
