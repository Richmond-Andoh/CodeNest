import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, Explore, Likes, Sidebar } from "./pagesImport";


const App = () => {
  return (
    <div className="flex text-white">
      <Sidebar />

      <div className="max-w-5xl my-5 transition-all duration-300 mx-auto flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;