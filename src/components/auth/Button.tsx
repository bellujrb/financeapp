import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { button } from "../../styles/auth/styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/auth";

interface Props {
    text: string;
    destiny: any;
}

const nav = useNavigation<StackNavigationProp<RootStackParams>>()

export function Button(props: Props){
    
    return (
        <View>
            <View style={button.organizebutton}/>
            <TouchableOpacity style={button.button} onPress={props.destiny}>
                <Text style={button.textbutton}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}