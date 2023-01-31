import React from "react";
import { Text, View } from 'react-native'
import { registerf } from "../../../styles/homeaddons/expenseadd/styles";

export function RegisterFinance (){

    return (
        <View style={registerf.container}>
            <View>
                <Text style={registerf.title}>Valor</Text>
                <Text style={registerf.subtitle}>R$ 0,00</Text>
                <View style={registerf.line1}/>
            </View>

            <View style={registerf.line2}/>

            <View>
                <Text style={registerf.title}>PAGO (INC...)</Text>
                <Text style={registerf.title}>NAO PAGO (INC...)</Text>
            </View>
            
        </View>
    )
}