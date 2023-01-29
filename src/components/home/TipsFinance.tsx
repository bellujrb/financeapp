import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RootStackParams } from "../../navigation/auth";
import { tips } from "../../styles/home/styles";

export function TipsFinance(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <View style={tips.rectangle}>
            <TouchableOpacity style={tips.borderrectangle} onPress={() => {
                    nav.navigate('tips')
                }}>

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