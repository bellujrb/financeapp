import React from "react";
import { Text, View } from 'react-native';
import { Header } from "../../../components/homeaddons/global/Header";
import { global } from "../../../styles/homeaddons/expenseview/styles";

export default function ExpenseView(){

    return (
        <View style={global.container}>
            <Header name="Despesas"/>
        </View>
    )
}