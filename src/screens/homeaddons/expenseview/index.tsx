import React from "react";
import { Text, View } from 'react-native';
import { ExpensePay } from "../../../components/homeaddons/expenseadd/ExpensePay";
import { Header } from "../../../components/homeaddons/global/Header";
import { global } from "../../../styles/homeaddons/expenseview/styles";

export default function ExpenseView(){

    return (
        <View style={global.container}>
            <Header name="Despesas"/>
            <ExpensePay price={259}/>

            <View style={global.align}>
                <View style={global.line}/>
            </View>
        </View>
    )
}