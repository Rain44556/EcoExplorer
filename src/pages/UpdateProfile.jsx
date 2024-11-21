import { useContext, useRef } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { user, userProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    

    const nameRef = useRef();
    const photoRef = useRef();

   

    const handleUpdateInformation = (e) => {
        e.preventDefault();
        
        
        const name = nameRef.current.value;
        const photo = photoRef.current.value;;
   
        
        userProfileUpdate({displayName: name, photoURL: photo })
            .then(() => {
                alert("successfully updated");
                navigate("/myProfile");
            }).catch(err => {
                //toast
                alert(err);
            });
    }

    return (
        <div className="hero bg-green-50 p-10 shadow-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Your Information!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body"
                        onSubmit={handleUpdateInformation}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                            defaultValue={user?.displayName || ""}
                            ref={nameRef} 
                            placeholder="name" 
                            className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="photo"
                                    defaultValue={user?.photoURL || ""}
                                    ref={photoRef} 
                                    placeholder="photo" 
                                    className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type= "submit" className="btn bg-green-500">Update Information</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;

