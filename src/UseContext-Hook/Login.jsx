import { useContext } from "react";
import { UserContext } from "./UserContext";

function Login() {

    const { setUser } = useContext(UserContext);

    return (
        <div>
            <button onClick={() => setUser("Zeel")}>
                Login
            </button>
 
            <button onClick={() => setUser("")}>
                Logout
            </button>
        </div>
    );
}

export default Login;