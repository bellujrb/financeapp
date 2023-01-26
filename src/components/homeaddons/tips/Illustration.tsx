import React from "react";
import { Image, View } from "react-native";
import { ill } from "../../../styles/homeaddons/tips/styles";

export function Illustration(){

    return (
        <View style={ill.align}>
            <Image 
            source={require('../../../assets/homeaddons/tips.png')}
            style={ill.img}/>
        </View>
    )
}