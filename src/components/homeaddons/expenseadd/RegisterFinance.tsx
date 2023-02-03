import React from "react";
import { Text, TextInput, View } from 'react-native'
import { registerf } from "../../../styles/homeaddons/expenseadd/styles";

interface Props {
    price: number
}

export function RegisterFinance (props: Props){

    return (
        <View style={registerf.container}>
            <View>
                <Text style={registerf.title}>Valor</Text>
                <View style={registerf.row}>
                    <Text style={registerf.subtitle}>R$</Text>
                    <TextInput maxLength={6} keyboardType='number-pad' 
                    
                    style={registerf.input}/>
                </View>
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