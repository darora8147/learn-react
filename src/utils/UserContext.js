import { createContext } from "react";

const UserContext = createContext({
    loggedInUserDetails: {
        name: "Defaut User",
        email: "default_user@gmail.com"
    }
});

export default UserContext;