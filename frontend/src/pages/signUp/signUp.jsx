import GenderComponent from "./genderComponent";

const SignUp = () => {
    return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full rounded-lg p-6 shadow-md bg-lime-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-rose-600">
                Sign Up <span className="text-blue-500"> ChatApp </span>
            </h1>

            <form>
                <div>
                    <input type="text" placeholder="Your Full Name" className="w-full input input-bordered h-10 mt-4" />
                </div>

                <div>
                    <input type="text" placeholder="Your Username" className="w-full input input-bordered h-10 mt-4" />
                </div>

                <div>
                    <input type="password" placeholder="Password" className="w-full input input-bordered h-10 mt-4" />
                </div>

                <div>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 mt-4" />
                </div>

                <GenderComponent />
                
                <a href='#' className='text-sm hover:underline hover: text-blue-600 mt-2 inline-block'>
                    Already have an account? Login Now
                </a>

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