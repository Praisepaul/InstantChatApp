import { useState } from "react";
import GenderComponent from "./genderComponent";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const { loading, signUp} = useSignup();

    const handleCheckBoxChange = (gender) =>{
        setInputs({...inputs, gender})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(inputs)
    }
    return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full rounded-lg p-6 shadow-md bg-lime-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-rose-600">
                Sign Up <span className="text-blue-500"> ChatApp </span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Your Full Name" className="w-full input input-bordered h-10 mt-4" 
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                </div>

                <div>
                    <input type="text" placeholder="Your Username" className="w-full input input-bordered h-10 mt-4" 
                    value={inputs.userName}
                    onChange={(e) => setInputs({...inputs, userName: e.target.value})}
                    />
                </div>

                <div>
                    <input type="password" placeholder="Password" className="w-full input input-bordered h-10 mt-4" 
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>

                <div>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 mt-4" 
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>

                <GenderComponent onCheckBoxChange = {handleCheckBoxChange} selected = {inputs.gender} />
                
                <Link to='/login' className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
                    Already have an account? Login Now
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border-slate-900'>
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    </div>;
};

export default SignUp;

//BASE CODE
// import GenderComponent from "./genderComponent";

// const SignUp = () => {
//     return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className="w-full rounded-lg p-6 shadow-md bg-lime-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-rose-600">
//                 Sign Up <span className="text-blue-500"> ChatApp </span>
//             </h1>

//             <form>
//                 <div>
//                     <input type="text" placeholder="Your Full Name" className="w-full input input-bordered h-10 mt-4" />
//                 </div>

//                 <div>
//                     <input type="text" placeholder="Your Username" className="w-full input input-bordered h-10 mt-4" />
//                 </div>

//                 <div>
//                     <input type="password" placeholder="Password" className="w-full input input-bordered h-10 mt-4" />
//                 </div>

//                 <div>
//                     <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 mt-4" />
//                 </div>

//                 <GenderComponent />
                
//                 <a href='#' className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
//                     Already have an account? Login Now
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border-slate-900'>
//                         Create Account
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>;
// };

// export default SignUp;