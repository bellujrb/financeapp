import React from "react";
import { View } from "react-native";
import { Header } from "../../../components/homeaddons/Header";
import { Illustration } from "../../../components/homeaddons/Illustration";
import { Input } from "../../../components/homeaddons/Input";
import { global } from "../../../styles/homeaddons/styles";

export default function ExpenseAdd(){

    return (
        <View style={global.container}>

            <Header/>
            <Illustration/>
            <View style={global.space}/>

            <View style={global.align}>
                <Input title="Nome e Categoria"/>
                <Input title="Forma de Pagamento"/>
                <Input title="Data de Vencimento"/>

                <View style={global.space}/>
                <View style={global.space}/>

                <View style={global.line}/>
            </View>

            
        </View>
    )
}