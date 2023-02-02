import React from "react";
import { View } from "react-native";
import { Header } from "../../../components/homeaddons/global/Header";
import { Illustration } from "../../../components/homeaddons/expenseadd/Illustration";
import { Input } from "../../../components/homeaddons/expenseadd/Input";
import { global } from "../../../styles/homeaddons/expenseadd/styles";
import { RegisterFinance } from "../../../components/homeaddons/expenseadd/RegisterFinance";
import { Button } from "../../../components/global/Button";

export default function ExpenseAdd(){

    return (
        <View style={global.container}>

            <Header name="Adicionar Despesa"/>
            <Illustration/>
            <View style={global.space}/>

            <View style={global.align}>

                <Input title="Nome e Categoria" category="Nenhuma"
                citem1="Assinatura"
                citem2="Compras"
                citem3="Restaurante"
                />

                <Input title="Forma de Pagamento" category="Nenhum"
                citem1="A Vista"
                citem2="Boleto"
                citem3="C. Credito"
                />

                <View style={global.space2}/>

                <View style={global.line}/>
            </View>

            <RegisterFinance/>

            <View style={global.align}>
                <View style={global.line}/>
                <View style={global.space2}/>
                
                <Button text="CADASTRAR"/>
            </View>
            
        </View>
    )
}