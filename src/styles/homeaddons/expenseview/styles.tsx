import React from "react";
import { StyleSheet } from "react-native";

export const pay = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        margin: 5,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 13,

        color: '#474A5A'
    },
    subtitle:{
        margin: 5,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 13,

        color: '#000000'
    },
    img:{
        height: 80,
        width: 62.52
    }
})

export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    align:{
        alignItems: 'center'
    },
    line:{
        marginTop: 20,

        width: '80%',
        height: 1,
        backgroundColor: '#FFC965'
    }
})