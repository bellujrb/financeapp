import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ctext } from "../../styles/auth/styles";

interface Props {
    msg: string;
}

export function ClickText(props: Props){

    return (
        <View>
            <TouchableOpacity style={ctext.organizerecover}>
                <Text style={ctext.titlerecover}>{props.msg}</Text>
            </TouchableOpacity>
        </View>
    )
}