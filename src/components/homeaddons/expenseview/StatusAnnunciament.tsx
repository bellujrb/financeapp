import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { statusann } from "../../../styles/homeaddons/expenseview/styles";

export function StatusAnnunciament(){

    return (
        <TouchableOpacity style={statusann.rectangle}>
            <View style={statusann.border}>
                <Image
                source={require('../../../assets/homeaddons/girlstatus.png')}
                style={statusann.img}/>

                <View style={statusann.align}>
                    <Text style={statusann.title}>Parabéns!</Text>
                    <Text style={statusann.subtitle}>Sua vida financeira esta controlada.</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}