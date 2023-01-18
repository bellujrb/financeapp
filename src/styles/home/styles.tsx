import { StyleSheet } from "react-native";

export const cubeicon = StyleSheet.create({
    cubeicon:{
        margin: 5,
        backgroundColor: '#FFFFFF',
        width: 120,
        height: 90,

        borderRadius: 10,
        bottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        width: 45.52,
        height: 47.99,
        bottom: 5,
    },
})

export const status = StyleSheet.create({
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
    },
})

export const info = StyleSheet.create({
    gradiantRectangle:{
        marginTop: 20,

        height: 137,
        width: 343.76,
        backgroundColor: '#5857CD',
        borderRadius: 20,

        alignItems: 'center',
        justifyContent: 'center'
    },
    titlegradiant:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.5,

        color: '#201937',
        opacity: 0.7
    },
    subtitlegradiant:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 32,
        letterSpacing: 0.5,

        color: '#201937',
    },
})

export const week = StyleSheet.create({
    infospent:{
        marginTop: 30,

        width: 343,
        height: 84,
        backgroundColor: '#322846',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    circlespent:{
        width: 52,
        height: 52,
        borderRadius: 52,

        backgroundColor: '#201937'
    },
    circlespentimg:{
        width: 40,
        height: 60,
        bottom: 5,
        left: 5
    },
    titlespent:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 12,

        color: '#FFFFFF'
    },
    subtitlespent:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 10,

        color: '#FFFFFF'
    },
    linespent:{
        height: 40,
        width: 0,
        
        backgroundColor: '#4A3D65',
        borderWidth: 1,
        borderColor: '#4A3D65' 
    },
    titlespent2:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 18,

        color: '#FFFFFF'
    },
    subtitlespent2:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 10,
    
        color: '#AFFEAD'
    },
    subtitlespent21:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 10,
    
        color: '#FFFFFF'
    },
})

export const expense = StyleSheet.create({
    rectangleexpenses:{
        width: 343,
        height: 84,
        backgroundColor: '#322846',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    circleexpenses:{
        height: 40,
        width: 40,
        borderRadius: 40,

        backgroundColor: '#201937',

        justifyContent: 'center',
        alignItems: 'center'
    },
    circleexpensesimg:{
        width: 24,
        height: 24
    },
    rectangletitleexpenses:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 16,

        color: '#FFFFFF'
    },
    rectanglesubtitleexpenses:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,

        color: '#707070'
    },
    rectangletitleexpenses2:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 16,

        color: '#FFFFFF'
    },
    rectanglesubtitleexpenses2:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 16,

        color: '#FFFFFF'
    }
})

export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    alignitens:{
        marginLeft: 10, 
        flexDirection: 'row-reverse'
    },
    containericons:{
        flexDirection: 'row',
        padding: 20
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
    align:{
        alignItems: 'center'
    },
    align2:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleexpense:{
        marginLeft: 8,
        padding: 20,
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 16,
    
        color: '#FFFFFF'
    },
    align3:{
        margin: 10
    }
})