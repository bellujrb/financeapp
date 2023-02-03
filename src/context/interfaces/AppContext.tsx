import React from "react";

export interface AppContextInterface {
    name: string
    email: string;
    password: string;
    id: string;
    paids: number;
    quantitypaids: number;
    daybuy: number;
    totalExpense: number;

    setName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setId: React.Dispatch<React.SetStateAction<string>>
    setTotalExpense: React.Dispatch<React.SetStateAction<number>>
    setPaids: React.Dispatch<React.SetStateAction<number>>
    setQuantityPaids: React.Dispatch<React.SetStateAction<number>>
    setDayBuy: React.Dispatch<React.SetStateAction<number>>
}