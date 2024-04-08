import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import Logout from "../logout/Logout";
import { useAuthContext } from "../../context/AuthContext"





const Sidebar = () => {
    const {authUser} = useAuthContext();
  return (
    <aside className="flex flex-col min-w-12 items-center sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto
     border-r bg-glass
    ">
       <nav className="flex flex-col h-full gap-3">
          <Link className="flex justify-center" to="/">
            <FaGithub size={25} />
          </Link>

          <Link to="/" className="mt-1.5 p-2 flex transition-colors duration-200 rounded-lg justify-center hover:bg-gray-800">
            <IoHome size={23} />
          </Link>

         { authUser && (
            <Link to={"/likes"} className="mt-1.5 p-2 flex transition-colors duration-200 rounded-lg justify-center hover:bg-gray-800">
               <GrFavorite size={23} />
            </Link>
         )}

         { authUser && (
            <Link to={"/explore"} className="mt-1.5 p-2 flex transition-colors duration-200 rounded-lg justify-center hover:bg-gray-800">
             <MdOutlineExplore size={23} />
            </Link>
         )}

        { !authUser && (
            <Link to={"/register"} className="mt-1.5 focus:outline-none p-2 flex transition-colors duration-200 rounded-lg justify-center hover:bg-gray-800">
              <GiArchiveRegister size={23} />
            </Link>
        )}

        { !authUser && (
            <Link to={"/login"} className="mt-1.5 focus:outline-none p-2 flex transition-colors duration-200 rounded-lg justify-center hover:bg-gray-800">
              <RiLoginCircleLine size={23} />
            </Link>
        )}
         
         { !authUser && (
            <div className="flex flex-col mt-auto gap-2">
               <Logout />
            </div>
         )}
       </nav>
    </aside>
  )
}

export default Sidebar