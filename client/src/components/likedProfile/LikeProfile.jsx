import { FaHeart } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const LikeProfile = ({ userProfile }) => {

  const { authUser } = useAuthContext();

  const isOwnProfile = authUser?.username === userProfile.login

  const handleLikes = async () => {
    try {
      const res = await fetch(`/api/users/likes/${userProfile.login}`, {
        method: "POST",
        credentials: "include"
      });

      const data = await res.json();

      if(data.error) {
        throw new Error(data.error),
        toast.error("Unable to like profile");
      }

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  if(!authUser || isOwnProfile) return null;

  return (
    <button className="p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center gap-2'
    " onClick={handleLikes}>
        <FaHeart size={25}/> Like Profile
    </button>
  )
}

export default LikeProfile
