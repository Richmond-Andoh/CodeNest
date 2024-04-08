import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () => {
    useContext(AuthContext);
}

export const AuthContentProvider = ({ children }) => {
    const [authUser, setauthUser] = useState(null);
    const [loading, setloading] = useState(false)
    useEffect(() => {
        const checkUserLoggedIn = async() => {

            setloading(true);

            try {
                const res = await fetch("/api/auth/check");
                const data = await res.json();
                setauthUser(data.user); // null or authenticated user object
            } catch (error) {
                toast.error(error.message);
            } finally {
                setloading(false);
            }
        }

        checkUserLoggedIn();
    }, [])
    return (
        <AuthContext.Provider value={{ authUser, setauthUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}