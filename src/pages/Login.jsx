import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { loginUser, setUser, logInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({});


    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);


    const handleLogin = (e) => {
        e.preventDefault();

        const loginForm = e.target;
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        // console.log(email,password)

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                e.target.reset();
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError({ ...error, login: err.code });
            })
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
                <h1 className="font-semibold text-center text-3xl">Login Form</h1>
                <form onSubmit={handleLogin} className="card-body ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label text-red-700 font-medium text-sm">
                                    {error.login}
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-green-500">Login</button>
                    </div>
                </form>
                <p className="text-center font-medium">Don't have an account? <Link className="text-green-700" to="/auth/signup">Sign up!!</Link></p>
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

export default Login;