import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    const { loginUser, setUser } = useContext(AuthContext);

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
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                alert(error.code);
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-500">Login</button>
                    </div>
                </form>
                <p className="text-center font-medium">Don't have an account? <Link className="text-green-700" to="/auth/signup">Sign up!!</Link></p>
            </div>
        </div>
    );
};

export default Login;