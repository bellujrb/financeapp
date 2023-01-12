import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { outset } from "../../../styles/auth/styles";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/auth";

export default function Outset(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>();

    function goLogin():void{
        nav.navigate('login')
    }

    return (
        <View style={outset.container}>
            <View style={{ height: '5%'}}/>
            <View style={{alignItems: 'center'}}>
            <Image
            source={require('../../../assets/utils/girloutset.png')}
            style={outset.img}/>

            <Text style={outset.title}>Finanças</Text>
            <Text style={outset.subtitle}>Organize suas finanças</Text>
            </View>
            <TouchableOpacity style={outset.button} onPress={goLogin}>
                <Text style={outset.buttontext}>IR</Text>
            </TouchableOpacity>
        </View>
    )
}