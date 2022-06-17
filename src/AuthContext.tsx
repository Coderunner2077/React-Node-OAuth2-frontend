import { createContext } from "react";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export const myContext = createContext({});

function AuthContext(props: any) {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState<any>(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/auth/user`, { withCredentials: true }) // the option makes sure api is aware of browser cookies
            .then((res: AxiosResponse) => {
                if (res.data)
                    setCurrentUser(res.data);
                else
                    setCurrentUser(null);
            });
    }, []);
    return (
        <myContext.Provider value={currentUser}>
            {children}
        </myContext.Provider>
    )
}

export default AuthContext
