import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#201937',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    img:{
        width: 400,
        height: 266
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 52,

        letterSpacing: 0.5,
        color: '#FFFFFF'
    },
    subtitle:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 18,

        letterSpacing: 0.5,
        color: '#FFFFFF'
    },
    button:{
        marginTop: 40,

        width: 94,
        height: 94,
        borderRadius: 94,

        backgroundColor: '#322846',

        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,
        letterSpacing: 2.55,

        color: '#FFFFFF'
    }
})