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

const context: AppContext = {
    email: '',
    password: '',

    setEmail: function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.');
    },
    setPassword: function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.');
    }
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