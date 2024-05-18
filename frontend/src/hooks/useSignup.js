import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext()

    const signUp = async ({fullName, userName, password, confirmPassword, gender}) => {
        const valid = handleInputErrors({fullName, userName, password, confirmPassword, gender})
        if(!valid){
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({fullName, userName, password, confirmPassword, gender})
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
 
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false);
            toast.success("User SignUp Successful 😍")
        }
    };
    return  { loading, signUp }
};

export default useSignup;

function handleInputErrors({fullName, userName, password, confirmPassword, gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error("All fields are required 😶‍🌫️")
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match 🤌")
        return false;
    }
    if(password.length < 8){
        toast.error("Minimum password length is 8 🫡")
        return false;
    }
    return true;
}