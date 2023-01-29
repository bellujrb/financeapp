import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { expense } from '../../styles/home/styles';

interface Props {
    quantity?: number,
    price?: string,
}

export function Expense ( props: Props ) {

    return (
        <View style={expense.organize}>
        <View style={expense.container}>

        <View style={expense.organize2}>
            <Text style={expense.title}>Despesas pagas</Text>
            <Text style={expense.subtitle}>Este mes foi pago o total de {props.quantity} despesas</Text>

            <TouchableOpacity style={expense.button}>
                <Text style={expense.titlebutton}>Ver agora</Text>
            </TouchableOpacity>
        </View>

        <Text style={expense.price}>R$ {props.price}</Text>
        </View>
        </View>
    )
}