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

export const statusp = StyleSheet.create({
    rectangle:{
        marginTop: 20,
        height: 72,
        width: 362,

        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    line:{
        marginLeft: 5,
        height: '100%',
        width: 1,
        backgroundColor: '#FFC965'
    },
    column:{
        flexDirection: 'column',
        marginLeft: 10
    },
    text:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: '#000000'
    },
    row:{
        flexDirection: 'row'
    },
    line2:{
        marginLeft: 5,
        height: '100%',
        width: 1,
        backgroundColor: 'black'
    },
    methodtext:{
        marginLeft: 5,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: '#4D5661'
    },
    cptext:{
        marginLeft: 5,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: '#4D5661'
    },
    statustext:{
        marginLeft: 10,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: 'red'
    },
    saround:{
        justifyContent: 'space-around'
    },
    confirmtext:{
        bottom: 10,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 11,

        color: '#FFB630'
    },
    datetext:{
        top: 8,
        left: 50,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 11,
        
        color: '#4D5661',
        flexWrap: 'wrap-reverse'
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
    alignsuper:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    line:{
        marginTop: 20,

        width: '80%',
        height: 1,
        backgroundColor: '#FFC965'
    },
    containersuper:{
        marginTop: 10,
        width: '90%',
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 13,

        color: '#474A5A'
    }
})