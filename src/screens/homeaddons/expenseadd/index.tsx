import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from "react-native";
import { Header } from "../../../components/homeaddons/global/Header";
import { Illustration } from "../../../components/homeaddons/expenseadd/Illustration";
import { Input } from "../../../components/homeaddons/expenseadd/Input";
import { global } from "../../../styles/homeaddons/expenseadd/styles";
import { RegisterFinance } from "../../../components/homeaddons/expenseadd/RegisterFinance";
import { Button } from "../../../components/global/Button";

export default function ExpenseAdd(){

    const [name, setName] = useState('');
    const [payment, setPayment] = useState();
    const [test, setTest] = useState();

    async function saveData(){
        const oneData = { 
            id: '1',
            name: name,
            payment: payment
        }
        await AsyncStorage.setItem(oneData.id, JSON.stringify(oneData))
        console.log(oneData)
        viewData();
    }

    async function viewData(){
        const myFinances = await AsyncStorage.getItem('1')
        const myFinancesFormated = myFinances ? JSON.parse(myFinances) : null
        setTest(myFinancesFormated);
    }

    console.log('setTest FORMAT', test);

    return (
        <View style={global.container}>

            <Header name="Adicionar Despesa"/>
            <Illustration/>
            <View style={global.space}/>

            <View style={global.align}>

                <Input title="Nome e Categoria" category="Nenhuma" value={name}
                setValue={setName}

                citem1="Assinatura"
                citem2="Compras"
                citem3="Restaurante"
                />

                <Input title="Forma de Pagamento" category="Nenhum"
                value={payment} setValue={setPayment}

                citem1="A Vista"
                citem2="Boleto"
                citem3="C. Credito"
                />

                <View style={global.space2}/>

                <View style={global.line}/>
            </View>

            <RegisterFinance price={10.50}/>

            <View style={global.align}>
                <View style={global.line}/>
                <View style={global.space2}/>
                
                <Button text="CADASTRAR" destiny={saveData}/>
            </View>
            
        </View>
    )
}