import React from "react";
import { Text, View } from 'react-native';
import { ExpensePay } from "../../../components/homeaddons/expenseview/ExpensePay";
import { StatusPay } from "../../../components/homeaddons/expenseview/StatusPay";
import { StatusAnnunciament } from "../../../components/homeaddons/expenseview/StatusAnnunciament";
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

                <StatusPay nameProduct="Fordcar IPVA" icon="car-sport-outline" price={1250} method="C. Credito" status="Em pagamento" x={'12X'} date="30/01/2023"/>
                <StatusPay nameProduct="Netflix" icon="tv-outline" price={17} method="C. Credito" x={'1X'} status="Em pagamento" date="30/01/2023"/>
                <StatusPay nameProduct="Compras" icon="reader-outline" price={875} method="A Vista" status="Pagamento OK" x={''} date="30/01/2023"/>
            </View>           

            <StatusAnnunciament/>
        </View>

        </View>
    )
}