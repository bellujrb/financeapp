import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function TipsFinance(){

    return (
        <View style={{
            marginTop: 30,

            width: '100%',
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF'
        }}>
            <TouchableOpacity style={{
                width: 329,
                height: 122,
                borderColor: '#F1F3FC',
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                source={require('../../assets/utils/girlhome.png')}
                style={{
                    width: 225.06,
                    height: 153.72,
                }}/>
                <View style={{
                    padding: 20
                }}>
                    <Text>Dicas</Text>
                    <Text>Confira nossas dicas para sua vida financeira.</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}