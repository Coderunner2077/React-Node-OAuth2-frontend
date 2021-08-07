import { createContext } from "react";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export const myContext = createContext({});

function AuthContext(props: any) {
    const { children} = props;
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() =>{
        axios.get("http://localhost:4000/auth/user", { withCredentials: true }) // the option makes sure api is aware of browser cookies
            .then((res: AxiosResponse) => {
                if(res.data)
                    setCurrentUser(res.data);
            });
    }, []);

    return (
        <myContext.Provider value={currentUser}>
            {children}
        </myContext.Provider>
    )
}

export default AuthContext
