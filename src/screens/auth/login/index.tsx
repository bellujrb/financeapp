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

export default function Login(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()


    return (
        <View style={global.container}>

            <Header name="Login"/>
            <View style={global.aligninputs}>

            <Input name="E-mail" placeholder="Digite seu e-mail"/>
            <Input name="Password" placeholder="Digite sua senha"/>
            </View>

            <ClickText msg="Esqueceu a senha?"/>

            <View style={global.alignbuttonandtext}>
            <Button text='LOGAR' destiny={ () => {
                nav.navigate('home')
            }}/>

            <MsgAccount msg="Não tem uma conta?" msg2="REGISTRAR AGORA"/>
            </View>
            </View>
    )
}