import React, { createContext, ReactNode, useState } from 'react'

interface Props {
    children?: ReactNode
}

interface AppContext {
    name: string
    email: string;
    password: string;
    setName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<AppContext | null>(null)

export const AppProvider = ({ children }: Props) => {

    const [name, setName] = useState('Belluzzo')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    return (
        <AppContext.Provider value={{ 
            name,
            setName,
            email, 
            setEmail, 
            password, 
            setPassword }}>
                
            {children}
        </AppContext.Provider>
    )
}