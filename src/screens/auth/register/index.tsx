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
import { global } from "../../../styles/auth/styles";
import firebase  from '../../../services/database/firebase'
import { AppContext } from "../../../services/context/context";

export default function Register(){

    interface FirebaseAuth {
        user: {
            uid: number | any,
            email: string,
        },
    }

    const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    const context = useContext(AppContext)

    useEffect(() => {

    }, [context])

    async function CreateAccount() {
        try {
            const value: FirebaseAuth = await firebase
                .auth()
                .createUserWithEmailAndPassword(context?.email, context?.password)
            firebase.database().ref('users').child(value.user.uid).set({
                name: context?.name,
                email: context?.email
            })
                console.log(' Usuario Criado ' + value.user.email + value.user.uid)
                context?.setId(value.user.uid)
                nav.navigate('home')
        } catch (err: any) {
            const errors: Record<string, () => void> = {
                'auth/weak-password': () =>
                console.log('Sua senha deve ter pelo menos 6 caracteres'),
                'auth/invalid-email': () => console.log('Email incorreto')
            }
            !errors[err.code] &&
            console.log(
                `Algo deu errado, consulte o desenvolvedor do projeto ERROR: ${err}`
            )
            errors[err.code]()
        }
        }

    return (
        <View style={global.container}>

            <Header name="Register"/>
            <View style={global.aligninputs}>

            <Input name="Nome" placeholder="Digite seu nome" value={context?.name} data={context?.setName}/>
            <Input name="E-mail" placeholder="Digite seu e-mail" value={context?.email} data={context?.setEmail}/>
            <Input name="Password" placeholder="Digite sua senha" value={context?.password} data={context?.setPassword} secure={true}/>
            <Input name="Confirm Password" placeholder="Confirme sua senha" value={context?.password} secure={true}/>
            </View>

            <ClickText msg="Esqueceu a senha?"/>

            <View style={global.alignbuttonandtext}>
            <Button text='REGISTRAR' destiny={ () => {
                CreateAccount();
            }}/>

            <MsgAccount msg="Ja tem uma conta?" msg2="ENTRAR AGORA" destiny={ () => {
                nav.navigate('login');
            }}/>
            </View>
            </View>
    )
}