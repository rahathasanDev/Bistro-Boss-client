import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    // console.log(auth,'88');
    return auth;
};

export default useAuth;