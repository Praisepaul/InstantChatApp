import { Link } from "react-router-dom";
import { useState } from "react";
import  useLogin from "../../hooks/useLogin";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(userName, password);
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-lime-200-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-2">
                    <h1 className='text-3xl font-semibold text-center text-rose-600'>
                        Login
                        <span className='text-blue-500'> ChatApp</span>
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10 m-3' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        </div>

                        <div>
                            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10 m-3' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Link to='/signup' className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
                            {"Don't"} have an account? Create One
                        </Link>

                        <div>
                            <button className='btn btn-block btn-sm mt-2' disabled = { loading }>
                                {loading ? <span className="loading loading-spinner"></span> : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login

//BASE CODE
// const Login = () => {
//     return (
//         <div>
//             <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//                 <div className="w-full p-6 rounded-lg shadow-md bg-lime-200-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-2">
//                     <h1 className='text-3xl font-semibold text-center text-rose-600'>
//                         Login
//                         <span className='text-blue-500'> ChatApp</span>
//                         </h1>

//                         <form>
//                             <div>
//                                 <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10 m-3' />
//                             </div>

//                             <div>
//                                 <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10 m-3' />
//                             </div>
//                             <a href='#' className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
//                                 {"Don't"} have an account? Create One
//                             </a>

//                             <div>
//                                 <button className='btn btn-block btn-sm mt-2'>
//                                     Login
//                                 </button>
//                             </div>
//                         </form>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Login