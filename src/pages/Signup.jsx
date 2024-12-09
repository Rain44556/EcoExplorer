import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
    const { signUpUser, setUser, userProfileUpdate, logInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showPasswordIcon, setShowPasswordIcon] = useState(false);
    const navigate = useNavigate()

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        const signUpForm = new FormData(e.target);
        const name = signUpForm.get("name");
        const email = signUpForm.get("email");
        const photo = signUpForm.get("photo");
        const password = signUpForm.get("password");
        setShowSuccess(false);

        if (password.length > 6) {
            setError({ ...error, password: "Must be at least 6 characters!!" })
            return;
        }
        const checkUpperCase = /[A-z]/;
        if (!checkUpperCase.test(password)) {
            setError({ ...error, password: 'Password must include at least one uppercase letter!' })
            return;
        }
        const checkLowerCase = /[a-z]/;
        if (!checkLowerCase.test(password)) {
            setError({ ...error, password: 'Password must include at least one lower letter!' })
            return;
        }


        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setShowSuccess(true)
                userProfileUpdate({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    }).catch(err => {
                        //toast
                        alert(err);
                    });
                // console.log(user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorCode,errorMessage);
                toast.error(error.message);
                setShowSuccess(false);
            });
    }

    const handleLoginGoogle = () => {
        logInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch((err) => {
                setError({ ...error, googleLogin: err.code });
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-md p-10 rounded-none">
                <h1 className="font-semibold text-center text-3xl">Signup Form</h1>
                <form onSubmit={handleSignUpSubmit} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo-url" className="input input-bordered" required />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"
                            type={showPasswordIcon ? 'text' : 'password'}
                            placeholder="password"
                            className="input input-bordered"
                            required />

                        <button onClick={() => setShowPasswordIcon(!showPasswordIcon)}
                            className="btn btn-ghost btn-sm absolute right-4 top-11">
                            {showPasswordIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </button>

                        {
                            error.password && (<label className="label text-red-700 text-sm font-medium">
                                {error.password}
                            </label>)
                        }
                        {
                            showSuccess && <p className="text-green-800 text-sm mt-2 font-medium">Successfully Signup!!</p>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-green-500">Signup</button>
                    </div>
                </form>
                <p className="text-center font-medium">Already have an account? <Link className="text-green-700" to="/auth/login">Please Login!!</Link></p>
                <p>
                    <button onClick={handleLoginGoogle} className="btn btn-ghost border-green-500 w-full my-3"> <FaGoogle />Google</button>
                </p>
                {
                    error.googleLogin && (
                        <label className="label text-red-700 font-medium text-sm">
                            {error.googleLogin}
                        </label>
                    )
                }
            </div>
        </div>
    );
};

export default Signup;