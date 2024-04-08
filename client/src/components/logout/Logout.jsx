import { RiLogoutCircleLine } from "react-icons/ri";
// TODO Implement Logout functionality
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const Logout = () => {
	const [ authUser, setauthUser ] = useAuthContext();
	
	const handleLogut = async () => {
		try {
			
			const res = await fetch("/api/auth/logout", { credentials: "include"});
			const data = await res.json();
			console.log(data);
			setauthUser(null);
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<>
			<img
				src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div onClick={handleLogut} className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'>
				<RiLogoutCircleLine size={23} />
			</div>
		</>
	);
};

export default Logout;