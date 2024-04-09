import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Register, Explore, Likes, Sidebar } from "./pagesImport";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, loading } = useAuthContext();
  console.log("Authenticated User :", authUser);

  if(loading) return null; // Loading screen while checking user authentication status
  
  return (
    <div className="flex text-white">
      <Sidebar />

      <div className="max-w-5xl my-5 transition-all duration-300 mx-auto flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ !authUser ? <Login /> : <Navigate to={"/"}/>} />
          <Route path="/register" element={ !authUser ? <Register /> : <Navigate to={"/"} />} />
          <Route path="/explore" element={ authUser ? <Explore /> : <Navigate to={"/login"} />} />
          <Route path="/likes" element={ authUser ? <Likes /> : <Navigate to={"/login"} />} />
        </Routes>
      </div>

      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}

export default App;