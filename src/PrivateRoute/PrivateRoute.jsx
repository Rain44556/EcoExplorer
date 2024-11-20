import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation();
    // console.log(location);
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;