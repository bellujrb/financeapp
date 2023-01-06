import React from "react";
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

export default function Register(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    return (
        <View style={global.container}>

            <Header name="Register"/>
            <View style={global.aligninputs}>

            <Input name="Nome" placeholder="Digite seu nome"/>
            <Input name="E-mail" placeholder="Digite seu e-mail"/>
            <Input name="Password" placeholder="Digite sua senha"/>
            <Input name="Confirm Password" placeholder="Confirme sua senha"/>
            </View>

            <ClickText msg="Esqueceu a senha?"/>

            <View style={global.alignbuttonandtext}>
            <Button text='REGISTRAR' destiny={ () => {
                nav.navigate('home')
            }}/>

            <MsgAccount msg="Ja tem uma conta?" msg2="ENTRAR AGORA"/>
            </View>
            </View>
    )
}