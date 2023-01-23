import React from "react";
import { StyleSheet } from "react-native";

export const header = StyleSheet.create({
    align:{
        height: '10%'
    },
    alignback:{
        padding: 20
    }
})

export const tip = StyleSheet.create({
    align:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    rectangle:{
        width: 334,
        height: 118,
        borderRadius: 30,
        flexDirection: 'row',
        backgroundColor: '#FFC965',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    img:{
        width: 190,
        height: 120.75,
        bottom: 1.5,
        left: 22
    },
    align2:{
        flexDirection: 'column',
        width: '45%',
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 10,

        color: '#FFFFFF'
    },
    subtitle:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,

        color: '#FFFFFF'
    }
})

export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F6FA'
    }
})