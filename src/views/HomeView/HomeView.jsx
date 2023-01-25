import { getUser } from "redux/userSlice";
import WithAuthRedirect from "HOC/WithAuthRedirect";
import { useSelector } from "react-redux";

const HomeView = () => {
    const user = useSelector(getUser);

    return !!user ? <h1>Welcome to HomePage </h1>:<h1>Log In to get access to your contacts</h1>
};

export default WithAuthRedirect(HomeView, '/login');
