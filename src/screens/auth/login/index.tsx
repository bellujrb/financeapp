import React, { useState} from "react";
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

export default function Login(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    async function CreateAccount() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
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

            <Input name="E-mail" placeholder="Digite seu e-mail" value={email} data={setEmail}/>
            <Input name="Password" placeholder="Digite sua senha" value={password} data={setPassword}/>
            </View>

            <ClickText msg="Esqueceu a senha?"/>

            <View style={global.alignbuttonandtext}>
            <Button text='LOGAR' destiny={ () => {
                CreateAccount();
            }}/>

            <MsgAccount msg="Não tem uma conta?" msg2="REGISTRAR AGORA"/>
            </View>
            </View>
    )
}
