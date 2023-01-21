import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/auth";
import { Header } from "../../../components/auth/Header";
import { Input } from "../../../components/auth/Input";
import { ClickText } from "../../../components/auth/ClickText";
import { Button } from "../../../components/auth/Button";
import { MsgAccount } from "../../../components/auth/MsgAccount";
import { AppContext } from "../../../services/context/context";
import { global } from "../../../styles/auth/styles";

import firebase  from '../../../services/database/firebase'

export default function Login(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    const context = useContext(AppContext)

    useEffect(() => {

    }, [context])

    async function LoginAccount() {
        await firebase.auth().signInWithEmailAndPassword(context?.email, context?.password)
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
            <Header name="Login"/>
            <View style={global.aligninputs}>

            <Input name="E-mail" placeholder="Digite seu e-mail" value={context?.email} data={context?.setEmail}/>
            <Input name="Password" placeholder="Digite sua senha" value={context?.password} data={context?.setPassword} secure={true}/>
            </View>

            <ClickText msg="Esqueceu a senha?"/>

            <View style={global.alignbuttonandtext}>
            <Button text='LOGAR' destiny={ () => {
                LoginAccount();
            }}/>

            <MsgAccount msg="Não tem uma conta?" msg2="REGISTRAR AGORA" destiny={ () => {
                nav.navigate('register');
            }}/>
            </View>
            </View>
    )
}
