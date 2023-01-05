import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/auth";

export default function Outset(){

    const nav = useNavigation<StackNavigationProp<RootStackParams>>();

    function goLogin():void{
        nav.navigate('login')
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '5%'}}/>
            <View style={{alignItems: 'center'}}>
            <Image
            source={require('../../../assets/utils/girloutset.png')}
            style={styles.img}/>

            <Text style={styles.title}>Finanças</Text>
            <Text style={styles.subtitle}>Organize suas finanças</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={goLogin}>
                <Text style={styles.buttontext}>IR</Text>
            </TouchableOpacity>
        </View>
    )
}