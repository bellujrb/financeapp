import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#201937',
    },
    aligninputs:{
        alignItems: 'center'
    },
    alignbuttonandtext:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const header = StyleSheet.create({
    titlelogin:{
        padding: 40,
                
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 32,

        letterSpacing: 0.03,
        color: '#FFFFFF'
    },
})

export const input = StyleSheet.create({
    spaceinputs:{
        margin: 10
    },
    textinput:{
        fontFamily: 'Poppins',

        fontWeight: '300',
        fontSize: 12,

        letterSpacing: 0.03,
        color: '#FFFFFF',

        marginBottom: 5,
        marginLeft: 2
    },
    input:{
        width: 334,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,

        color: '#AAACAE',
        padding: 10
    },
})

export const ctext = StyleSheet.create({
    organizerecover:{
        flexDirection: 'row-reverse',
        marginLeft: 28
    },
    titlerecover:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,

        letterSpacing: 0.3,
        color: '#FFFFFF'
    },
})

export const button = StyleSheet.create({
    organizebutton:{
        alignItems: 'center',
        marginTop: 20,
    },
    button:{
        width: 300,
        height: 54,

        backgroundColor: '#5857CD',
        borderRadius: 60,
                
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbutton:{
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 16,

        color: '#FFFFFF',
    },
})

export const msgacc = StyleSheet.create({
    organizenoaccount:{
        flexDirection: 'row',
        marginTop: 20
    },
    textnoaccount:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,

        letterSpacing: 0.03,
        color: '#6C6982'
    },
    textregisterorganize:{
        marginLeft: 5
    },
    textregister:{
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 16,

        color: '#FFFFFF'
    }
})