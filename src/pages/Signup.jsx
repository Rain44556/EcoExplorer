import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {

    const { newUser, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const signUpForm = new FormData(e.target);
        const name = signUpForm.get("name");
        const email = signUpForm.get("email");
        const photo = signUpForm.get("photo");
        const password = signUpForm.get("password");

        newUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode,errorMessage);
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-md p-10 rounded-none">
                <h1 className="font-semibold text-center text-3xl">Signup Form</h1>
                <form onSubmit={handleSubmit} className="card-body ">
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
                        <button className="btn bg-green-500">Signup</button>
                    </div>
                </form>
                <p className="text-center font-medium">Already have an account? <Link className="text-green-700" to="/auth/login">Please Login!!</Link></p>
            </div>
        </div>
    );
};

export default Signup;