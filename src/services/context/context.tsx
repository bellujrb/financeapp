import React, { createContext } from "react";

type UserContextType = {
    email?: string | null;
    setEmail?: React.Dispatch<React.SetStateAction<string | null>>;
    password?: string | null;
    setPassword?: React.Dispatch<React.SetStateAction<string | null>>
}

const iUserContextState = {
    email: null,
    setEmail: () => {},
    password: null,
    setPassword: () => {}
};

const UserContext = createContext<UserContextType>(iUserContextState)

export default UserContext;