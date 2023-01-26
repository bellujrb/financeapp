import { StyleSheet } from "react-native"

export const ill = StyleSheet.create({
    align:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img:{
        width: 350,
        height: 281,
        left: 20
    }
})

export const ann = StyleSheet.create({
    rectangle:{
        margin: 20,
        flexDirection: 'row',

        width: 334,
        height: 118,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 201, 101, 0.25)',        
    },
    title:{
        padding: 20,
        width: '48%',

        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 12,

        color: '#4D5661'
    },
    subtitle:{
        left: 20,

        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 12,

        color: '#FFB630'     
    }
})

export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F6FA'
    },
})