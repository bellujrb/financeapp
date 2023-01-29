import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ann } from "../../../styles/homeaddons/tips/styles";

export function Announcement(){

    return (
            <View style={ann.rectangle}>

                <View style={ann.widthspace}>
                    <Text style={ann.title}>Sua vida financeira
                    esta precisando de uma reforma!</Text>

                    <TouchableOpacity>
                        <Text style={ann.subtitle}>Assinar Finance Plus</Text>
                    </TouchableOpacity>
                </View>

                <Image
                source={require('../../../assets/homeaddons/money.png')}
                style={ann.img}/>
            </View>
    )
}
