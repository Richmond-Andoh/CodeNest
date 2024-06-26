import { RiLogoutCircleLine } from "react-icons/ri";
// TODO Implement Logout functionality
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const Logout = () => {
	const { authUser, setauthUser } = useAuthContext();
	
	const handleLogout = async () => {
		try {
			
			const res = await fetch("/api/auth/logout", { credentials: "include"});
			const data = await res.json();
			console.log(data);
			setauthUser(null);
			toast.success("User has logged out successfully");
			
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<>
			<img
				src={authUser?.avatarUrl}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div onClick={handleLogout} className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'>
				<RiLogoutCircleLine size={23} />
			</div>
		</>
	);
};

export default Logout;