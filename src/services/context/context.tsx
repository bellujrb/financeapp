import React, { createContext, ReactNode, useState } from 'react'

interface Props {
    children?: ReactNode
}

interface AppContext {
    email: string;
    password: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<AppContext | null>(null)

export const AppProvider = ({ children }: Props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    return (
        <AppContext.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
        </AppContext.Provider>
    )
}