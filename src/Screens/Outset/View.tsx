import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

export default function OutsetView(){

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
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>IR</Text>
            </TouchableOpacity>
        </View>
    )
}