import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {
    const { signUpUser, setUser, userProfileUpdate} = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate()

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        const signUpForm = new FormData(e.target);
        const name = signUpForm.get("name");
        if(name.length < 4){
            setError({...error, name: "Must be at least 4 characters!"})
        return;
        }

        const email = signUpForm.get("email");
        const photo = signUpForm.get("photo");
        const password = signUpForm.get("password");

        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                e.target.reset();
                userProfileUpdate({displayName: name, photoURL: photo})
                .then(()=>{
                    navigate("/");
                }).catch(err=>{
                    //toast
                    console.log(err);
                });
                // console.log(user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorCode,errorMessage);
                alert(error.message);
            });
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
                    {
                        error.name && ( <label className="label text-red-700 text-sm font-medium">
                           {error.name}
                        </label>)
                    }
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