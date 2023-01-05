import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../Global/Styles";

export default function RegisterView(){
    
    return (
        <View style={styles.container}>

            <Text style={styles.titlelogin}>Register</Text>

            <View style={styles.aligninputs}>
            <View style={styles.spaceinputs}>
                <Text style={styles.textinput}>Nome</Text>
                
                <TextInput
                placeholder="Digite seu nome"
                style={styles.input}/>
            </View>

            <View style={styles.spaceinputs}> 
                <Text style={styles.textinput}>E-mail</Text>
                
                <TextInput
                placeholder="Digite seu e-mail"
                style={styles.input}/>
            </View>

            <View style={styles.spaceinputs}> 
                <Text style={styles.textinput}>Senha</Text>
                
                <TextInput
                placeholder="Digite sua senha"
                style={styles.input}/>
            </View>

            <View style={styles.spaceinputs}> 
                <Text style={styles.textinput}>Confirmacao Senha</Text>
                
                <TextInput
                placeholder="Confirme sua senha"
                style={styles.input}/>
            </View>
            </View>

            <View style={styles.organizeinputlogin}>
            <TouchableOpacity style={styles.inputlogin}>
                <Text style={styles.textlogin}>LOGAR</Text>
            </TouchableOpacity>

            <View style={styles.organizenoaccount}>
                <Text style={styles.textnoaccount}>Ja tem uma conta?</Text>
                <TouchableOpacity style={styles.textregisterorganize}>
                    <Text style={styles.textregister}>Entrar Agora</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}