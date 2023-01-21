import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { tips } from "../../styles/home/styles";

export function TipsFinance(){

    return (
        <View style={tips.rectangle}>
            <TouchableOpacity style={tips.borderrectangle}>

                <Image
                source={require('../../assets/utils/girlhome.png')}
                style={tips.img}/>

                <View>
                    <Text style={tips.title}>Dicas</Text>
                    <Text style={tips.subtitle}>Confira nossas dicas para sua vida financeira.</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}