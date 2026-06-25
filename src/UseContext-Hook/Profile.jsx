import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

    const { user } = useContext(UserContext);

    return (
        <div>
            {user ? <h1>WELCOME {user}</h1> : <h1>PLEASE LOGIN</h1>}
        </div>
    );
}

export default Profile;