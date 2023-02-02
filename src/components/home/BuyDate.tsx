import React from "react";
import { Text, View } from "react-native";
import { buy } from "../../styles/home/styles";

interface Props {
    numberBuy: any;
}

export function BuyDate(props: Props){

    return (
        <View style={buy.align}>
        <View style={buy.rectangle}>
            <Text style={buy.text}>Melhor dia para compras</Text>
            <Text style={buy.text}>{props.numberBuy}</Text>
        </View>
        </View>
    )
}