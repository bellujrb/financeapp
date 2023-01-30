import { StyleSheet } from "react-native";

export const header = StyleSheet.create({
    align:{
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    alignback:{
        padding: 20
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 13,

        color: '#151515'
    }
})

export const ill = StyleSheet.create({
    align:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        right: 20
    },
    img1:{
        width:  250,
        height: 200
    },
    img2:{
        width:  70,
        height: 183
    }
})

export const input = StyleSheet.create({
    align:{
        margin: 10
    },
    input:{
        width: 305,
        height: 37,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#DFE2E5'
    }
})

export const registerf = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,

        color: '#4D5661'
    },
    subtitle:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 15,

        color: '#FFC965'
    },
    line1:{
        top: 5,

        height: 1,
        width: 80,
        backgroundColor: 'rgba(118, 103, 76, 0.7)'
    },
    line2:{
        width: 1,
        height: 80,
        backgroundColor: '#FFC965'
    }
})


export const global = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F6FA'
    },
    space:{
        height: '1%',
        width: '100%'
    },
    space2:{
        height: '5%',
        width: '100%'
    },
    align:{
        alignItems: 'center'
    },
    line:{
        top: 10,
        width: '82%',
        height: 2,
        backgroundColor: '#FFC965'
    }
})