import { StyleSheet } from "react-native";

export const header = StyleSheet.create({
    organize:{
        width: '100%',
        height: '18%',
        backgroundColor: '#FFC965'
    },
    align:{
        padding: 20,
        width: '60%'
    },
    title:{
        marginTop: 10,
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,

        color: '#FFFFFF'
    },
    subtitle:{
        width: '48%',
        marginTop: 10,

        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,

        color: '#FFFFFF'
    },
    organize2:{
        marginTop: 15,

        flexDirection: 'row',
        width: '25%',
        justifyContent: 'space-between'
    },
    line:{
        width: 20,
        height: 1,

        backgroundColor: '#FFFFFF',
    },
    lineopacity:{
        width: 20,
        height: 1,
        opacity: 0.5,
        backgroundColor: '#FFFFFF'
    },
    row:{
        flexDirection: 'row'
    },
    iconsettings:{
        margin: 5,
        top: 3,
        left: 5
    },
    scroll:{
        height: '50%'
    }
})

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
    title:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        color: '#787A84'
    }
})

export const info = StyleSheet.create({
    organize:{
        bottom: 20,
        padding: 10,
        marginLeft: 10,

        width: '58%',
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 15,

        color: '#FFC965',
    },
    subtitle:{
        marginTop: 5,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 15,

        color: '#80828C'
    }
})

export const expense = StyleSheet.create({
    organize:{
        alignItems: 'center',
        width: '100%'
    },
    container:{
        height: 100,
        width: 335,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        flexDirection: 'row'
    },
    organize2:{
        padding: 20,
        width: '55%'
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 14,

        color: '#4D5661'
    },
    subtitle:{
        marginTop: 5,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,

        color: '#80828C'
    },
    price:{
        marginLeft: 40,
        padding: 20,

        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,

        color: '#4D5661'
    }
})

export const buy = StyleSheet.create({
    align:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangle:{
        width: 335,
        height: 37.92,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    text:{
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 12,

        color: '#45661'
    }
})

export const tips = StyleSheet.create({
    rectangle:{
        marginTop: 30,

        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    borderrectangle:{
        width: 329,
        height: 122,
        borderColor: '#F1F3FC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: 225.06,
        height: 153.72,
        left: 60,
        bottom: 16
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 13,

        color: '#000000'
    },
    subtitle:{
        marginTop: 10,
        width: '60%',

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 13,

        color: '#787A84'
    }
})

export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    alignitens:{
        marginLeft: 10, 
        flexDirection: 'row-reverse',
        position: 'relative'
    },
})