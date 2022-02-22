
import { RouteProps} from 'react-router-dom';
import { Outlet } from 'react-router';
import Login from '../components/login/login'

interface Props extends RouteProps {
    isAuth: boolean,
}
const ProtectedRoute = ({isAuth, ...routeProps}: Props) => {
    
    console.log(isAuth)
    if (isAuth) {
        return <Outlet/>
    }
    else {

        return (
            <Login/>
        );
    }
    
    
}
export default ProtectedRoute