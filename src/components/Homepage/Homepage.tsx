import React, { useContext } from 'react';
import { myContext } from "../../AuthContext";
import { IUser } from "../../types/types";

function Homepage() {
    const user = useContext(myContext) as IUser;
    return (
        <div>
            {
                user ? (
                    <h1>Welcome back {user.username}</h1>
                ) : (
                    <h1>Welcome To My Website</h1>
                )
            }
        </div>
    )
}

export default Homepage;