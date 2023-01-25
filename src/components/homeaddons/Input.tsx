import React from "react";
import { View, Text, TextInput } from 'react-native'
import { input } from "../../styles/homeaddons/styles";

interface Props {
    title: string,
}

export function Input(props: Props){

    return (
        <View style={input.align}>
            <Text>{props.title}</Text>
            <TextInput
                style={input.input}
            />
        </View>
    )
}