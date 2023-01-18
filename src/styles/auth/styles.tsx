import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F6FA',
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
        color: '#000000'
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
        color: '#3D3D3D',

        marginBottom: 5,
        marginLeft: 2
    },
    input:{
        width: 334,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        borderColor: '#DFE2E5',
        borderWidth: 1,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,

        padding: 10,
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
        color: '#000000'
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

        backgroundColor: '#FFC965',
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

        color: '#FFC965'
    }
})

export const outset = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        color: '#000000'
    },
    subtitle:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 18,

        letterSpacing: 0.5,
        color: '#828282'
    },
    button:{
        marginTop: 40,

        width: 94,
        height: 94,
        borderRadius: 94,

        backgroundColor: '#222222',

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