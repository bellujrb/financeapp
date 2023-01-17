import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { msgacc } from "../../styles/auth/styles";

interface Props {
    msg: string;
    msg2: string;
    destiny: any;
}

export function MsgAccount(props: Props){

    return (
        <View>
            <View style={msgacc.organizenoaccount}>
                <Text style={msgacc.textnoaccount}>{props.msg}</Text>
                <TouchableOpacity style={msgacc.textregisterorganize} onPress={props.destiny}>
                    <Text style={msgacc.textregister}>{props.msg2}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}