import React from "react";
import { View, Text, TextInput } from "react-native";
import { input } from "../../styles/auth/styles";

interface Props {
    name: string;
    placeholder: string;
    value?: any;
    data?: any;
    secure?: boolean;
}

export function Input(props: Props){
    
    return (
        <View>
            <View style={input.spaceinputs}>
                <Text style={input.textinput}>{props.name}</Text>
                
                <TextInput
                placeholder={props.placeholder}
                style={input.input}
                value={props.value}
                onChangeText={value => props.data(value)}
                secureTextEntry={props.secure}/>
            </View>
        </View>
    )
}