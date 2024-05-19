import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import { useState } from "react";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
  const login = async (userName, password) => {
    setLoading(true);
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({userName, password})
        })

        const data = await res.json();

        if(data.error){
            throw new Error(data.error);
        }

        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        toast.success("Logged In Sucessfully ✔️")
        setLoading(false);
    }
  }
  return {loading, login};
}

export default useLogin;