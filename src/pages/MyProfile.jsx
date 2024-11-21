import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/updatedProfile');
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
            <h1 className="text-3xl font-bold text-green-600 mb-20">
                Welcome, <span className="text-4xl  text-green-800">{user.displayName}!</span> Enjoy Your Stay
            </h1>

            <div className="bg-white shadow-lg rounded-lg w-96">
                <div className="flex flex-col items-center">

                    <div className="w-full relative">
                        <img
                            src="https://i.ibb.co.com/0mzd6Lg/rb-126350.png"
                            alt="backgroundImage"
                            className="w-full h-32 object-cover mx-auto"
                        />

                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                            <img
                                src={user?.photoURL}
                                alt={`${user.displayName}'s Profile`}
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                        </div>
                    </div>

                    <h2 className="mt-10 mb-2">
                        Name: <span className="text-lg font-semibold text-gray-800">{user?.displayName}</span>
                    </h2>

                    <p className="text-gray-600 mb-6">Email: {user?.email}</p>

                    <button
                        onClick={handleUpdateProfile}
                        className="bg-green-600 hover:bg-green-700 mb-4 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;