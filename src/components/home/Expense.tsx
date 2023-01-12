import React from 'react';
import { View, Text, Image } from 'react-native'
import { global, expense } from '../../styles/home/styles';

interface Props {
    name: string,
    type: string,
    price: number,
    level: string
}

export function Expense ( props: Props ) {

    return (
        <View style={expense.rectangleexpenses}>
                
            <View style={expense.circleexpenses}>
                <Image
                source={require('../../../assets/utils/creditcard.png')}
                style={expense.circleexpensesimg}/>
            </View>

            <View style={global.align2}>
                    <Text style={expense.rectangletitleexpenses}>{props.name}</Text>
                    <Text style={expense.rectanglesubtitleexpenses}>{props.type}</Text>
            </View>

            <View style={global.align2}>
                    <Text style={expense.rectangletitleexpenses2}>R$ {props.price}.99</Text>
                    <Text style={expense.rectanglesubtitleexpenses2}>{props.level}</Text>
            </View>
        </View>
    )
}