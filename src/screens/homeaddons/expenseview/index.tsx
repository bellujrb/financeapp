import React from "react";
import { Text, View } from 'react-native';
import { ExpensePay } from "../../../components/homeaddons/expenseadd/ExpensePay";
import { StatusPay } from "../../../components/homeaddons/expenseadd/StatusPay";
import { Header } from "../../../components/homeaddons/global/Header";
import { global } from "../../../styles/homeaddons/expenseview/styles";

export default function ExpenseView(){

    return (
        <View style={global.container}>
            <Header name="Despesas"/>
            <ExpensePay price={1250}/>

            <View style={global.align}>
                <View style={global.line}/>
            </View>

            <View style={global.alignsuper}>
                <View style={global.containersuper}>
                <Text style={global.title}>Recentes</Text>

                <StatusPay nameProduct="Fordcar" price={1250} method="C. Credito" status="Em pagamento" x={12} date="30/01/2023"/>
            </View>           
        </View>

        </View>
    )
}