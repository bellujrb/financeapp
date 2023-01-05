import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styles";
export default function LoginView(){

    return (
        <View style={styles.container}>

            <Text style={styles.titlelogin}>Login</Text>

            <View style={{
                alignItems: 'center'
            }}>
            <View style={{
                margin: 10
            }}>
                <Text style={styles.textinput}>E-mail</Text>
                
                <TextInput
                placeholder="Digite seu e-mail"
                style={styles.input}/>
            </View>

            <View style={{
                margin: 10
            }}> 
                <Text style={styles.textinput}>Senha</Text>
                
                <TextInput
                placeholder="Digite sua senha"
                style={styles.input}/>
            </View>
            </View>

            <TouchableOpacity style={styles.organizerecover}>
                <Text style={styles.titlerecover}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <View style={styles.organizeinputlogin}>
            <TouchableOpacity style={styles.inputlogin}>
                <Text style={styles.textlogin}>LOGAR</Text>
            </TouchableOpacity>

            <View style={styles.organizenoaccount}>
                <Text style={styles.textnoaccount}>Não tem uma conta?</Text>
                <TouchableOpacity style={{
                    marginLeft: 5
                }}>
                    <Text style={styles.textregister}>Register Agora</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}