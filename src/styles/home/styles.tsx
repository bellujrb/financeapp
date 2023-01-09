import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#201937',
    },
    containerheader:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    alignitens:{
        flexDirection: 'column'
    },
    containericons:{
        flexDirection: 'row',
        padding: 20
    },
    cubeicon:{
        margin: 10,

        width: 40,
        height: 40,

        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D0D0D0',

        justifyContent: 'center',
        alignItems: 'center'
    },
    organizetexts:{
        marginLeft: 30,
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 18,
        letterSpacing: 0.5,

        color: '#FFFFFF'
    },
    subtitle:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,

        letterSpacing: 0.5,
        color: '#746996'
    },
    rectanglestate:{
        width: 120,
        height: 67,

        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D0D0D0',
                
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlestate:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 18,

        letterSpacing: 0.5,
        color: '#FFFFFF'
    },
    subtitlestate:{
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 10,

        color: '#AFFEAD'
    }
})