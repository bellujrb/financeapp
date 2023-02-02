import React, { createContext, ReactNode, useState } from 'react'

interface Props {
    children?: ReactNode
}

interface AppContext {
    name: string
    email: string;
    password: string;
    id: string;
    paids: number;
    quantitypaids: number;
    daybuy: number;

    setName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setId: React.Dispatch<React.SetStateAction<string>>
    setPaids: React.Dispatch<React.SetStateAction<number>>
    setQuantityPaids: React.Dispatch<React.SetStateAction<number>>
    setDayBuy: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = createContext<AppContext | null>(null)

export const AppProvider = ({ children }: Props) => {

    const [name, setName] = useState('unkdown')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [id, setId] = useState('')
    const [paids, setPaids] = useState(0);
    const [quantitypaids, setQuantityPaids] = useState(0);
    const [daybuy, setDayBuy] = useState(0);

    return (
        <AppContext.Provider value={{ 
                name,
                setName,
                email, 
                setEmail, 
                password, 
                setPassword,
                id,
                setId,
                
                paids,
                setPaids,
                quantitypaids,
                setQuantityPaids,
                daybuy,
                setDayBuy
            }}>
                
            {children}
        </AppContext.Provider>
    )
}