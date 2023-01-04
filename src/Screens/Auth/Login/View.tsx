import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default function LoginView(){

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#201937',
        }}>
            <View style={{
                padding: 40,
            }}>
            <TouchableOpacity style={{
                width: 40,
                height: 40,

                backgroundColor: '#5857CD',
                borderRadius: 16,

                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>X</Text>
            </TouchableOpacity>

            <Text style={{
                marginTop: 20,
                
                fontFamily: 'Poppins',
                fontWeight: '600',
                fontSize: 32,

                letterSpacing: 0.03,
                color: '#FFFFFF'
            }}>Register</Text>
        </View>
        </View>
    )
}