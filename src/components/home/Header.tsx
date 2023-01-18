import React from "react";
import { View, Text } from "react-native";
import { header } from "../../styles/auth/styles";

interface Props {
    name?: string;
}

export function Header(props: Props){

    return (
        <View style={{
            width: '100%',
            height: '18%',
            backgroundColor: '#FFC965'
        }}>
            <View style={{
                padding: 20,
                width: '60%'
            }}>
                <Text style={{
                    marginTop: 10,
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: 14,

                    color: '#FFFFFF'
                }}>Ola, Belluzzo</Text>
                <Text style={{
                    marginTop: 10,

                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: 14,

                    color: '#FFFFFF'
                }}>Despesa mensal acumulada de R$ 3.089,09</Text>

                <View style={{
                    marginTop: 15,

                    flexDirection: 'row',
                    width: '25%',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: 20,
                        height: 1,

                        backgroundColor: '#FFFFFF'
                    }}/>
                    <View style={{
                        width: 20,
                        height: 1,
                        opacity: 0.5,
                        backgroundColor: '#FFFFFF'
                    }}/>
                </View>

            </View>
        </View>
    )
}