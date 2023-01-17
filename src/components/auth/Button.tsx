import React, { ReactComponentElement } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { button } from "../../styles/auth/styles";

interface Props {
    text: string;
    destiny: any;
}

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