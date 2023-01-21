import React from "react";
import { View, Text } from "react-native";
import { header } from "../../styles/home/styles";

interface Props {
    name?: string;
}

export function Header(props: Props){

    return (
        <View style={header.organize}>
            <View style={header.align}>
                <Text style={header.title}>Ola, Belluzzo</Text>
                <Text style={header.subtitle}>Despesa mensal acumulada de R$ 3.089,09</Text>

                <View style={header.organize2}>
                    <View style={header.line}/>
                    <View style={header.lineopacity}/>
                </View>

            </View>
        </View>
    )
}