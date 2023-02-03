import React, { createContext, ReactNode, useState } from 'react'
import { AppContextInterface } from './interfaces/AppContext'
import { Props } from './interfaces/Props'


export const AppContext = createContext<AppContextInterface | null>(null)

export const AppProvider = ({ children }: Props) => {

    const [name, setName] = useState('Unkdown')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const [totalExpense, setTotalExpense] = useState(0);
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
                
                totalExpense,
                setTotalExpense,
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