import React from "react";
import { View } from "react-native";
import { Header } from "../../../components/homeaddons/global/Header";
import { Illustration } from "../../../components/homeaddons/expenseview/Illustration";
import { Input } from "../../../components/homeaddons/expenseview/Input";
import { global } from "../../../styles/homeaddons/expenseadd/styles";

export default function ExpenseAdd(){

    return (
        <View style={global.container}>

            <Header name="Adicionar Despesa"/>
            <Illustration/>
            <View style={global.space}/>

            <View style={global.align}>
                <Input title="Nome e Categoria"/>
                <Input title="Forma de Pagamento"/>
                <Input title="Data de Vencimento"/>

                <View style={global.space2}/>

                <View style={global.line}/>
            </View>

            
        </View>
    )
}