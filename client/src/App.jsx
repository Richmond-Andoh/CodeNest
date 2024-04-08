import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Register, Explore, Likes, Sidebar } from "./pagesImport";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();
  console.log("Authenticated User :", authUser)
  return (
    <div className="flex text-white">
      <Sidebar />

      <div className="max-w-5xl my-5 transition-all duration-300 mx-auto flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ !authUser ? <Login /> : <Navigate to={"/"}/>} />
          <Route path="/register" element={ !authUser ? <Register /> : <Navigate to={"/"} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;