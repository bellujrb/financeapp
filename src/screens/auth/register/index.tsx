import React, { useContext, useEffect, useState} from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/auth";
import { Header } from "../../../components/auth/Header";
import { Input } from "../../../components/auth/Input";
import { ClickText } from "../../../components/auth/ClickText";
import { Button } from "../../../components/auth/Button";
import { MsgAccount } from "../../../components/auth/MsgAccount";
import { global } from "../../../styles/auth/styles";
import firebase  from '../../../services/database/firebase'
import { AppContext } from "../../../services/context/context";

export default function Register(){

    const context = useContext(AppContext)

    useEffect(() => {

    }, [context])

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    async function CreateAccount() {
        await firebase.auth().createUserWithEmailAndPassword(context?.email, context?.password)
        .then( (value:number) => {
            console.log(value);
        nav.navigate('home');
        })
        .catch( (err:string) => {
            console.log(err)
        })
    }

    return (
        <View style={global.container}>

            <Header name="Register"/>
            <View style={global.aligninputs}>

            <Input name="Nome" placeholder="Digite seu nome"/>
            <Input name="E-mail" placeholder="Digite seu e-mail" value={context?.email} data={context?.setEmail}/>
            <Input name="Password" placeholder="Digite sua senha" value={context?.password} data={context?.setPassword} secure={true}/>
            <Input name="Confirm Password" placeholder="Confirme sua senha" value={context?.password} secure={true}/>
            </View>

            <ClickText msg="Esqueceu a senha?"/>

            <View style={global.alignbuttonandtext}>
            <Button text='REGISTRAR' destiny={ () => {
                CreateAccount();
            }}/>

            <MsgAccount msg="Ja tem uma conta?" msg2="ENTRAR AGORA"/>
            </View>
            </View>
    )
}