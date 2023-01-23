import React from "react";
import { View, Image, Text,  } from 'react-native'
import { tip } from "../../styles/homeaddons/styles";

export function Tip(){

    return (
        <View style={tip.align}>

            <View style={tip.rectangle}>
                <Image 
                source={require('../../assets/homeaddons/modeltip.png')}
                style={tip.img}
                />

                <View style={tip.align}>
                    <Text style={tip.title}>Adicione sua despesa</Text>
                    <Text style={tip.subtitle}>De Forma Simples! Basta Seguir Abaixo</Text>
                </View>
            </View>
        </View>
    )
}