import React from "react";
import { View, Text } from "react-native";
import { header } from "../../styles/auth/styles";

interface Props {
    name: string;
}

export function Header(props: Props){

    return (
        <View>
            <Text style={header.titlelogin}>{props.name}</Text>
        </View>
    )
}