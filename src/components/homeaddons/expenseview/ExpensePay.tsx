import React from "react";
import { View, Text, Image } from "react-native";
import { pay } from "../../../styles/homeaddons/expenseview/styles";

interface Props {
    price: number
}
export function ExpensePay(props: Props){

    return (
        <View style={pay.container}>
            <View>
                <Text style={pay.title}>Despesa total a pagar</Text>
                <Text style={pay.subtitle}>R$ {props.price}</Text>
            </View>

            <Image 
                source={require('../../../assets/homeaddons/pay.png')}
                style={pay.img}
            />
        </View>
    )
}