import { StyleSheet } from "react-native"

export const ill = StyleSheet.create({
    align:{
        flexDirection: 'row',
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
    widthspace:{
        width: '50%'
    },
    title:{
        padding: 20,
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
    },
    img:{
        width: 190,
        height: 124,
        right: 20,
    }
})

export const free = StyleSheet.create({
    rectangle:{
        top: 10,
        margin: 10,

        width: 329,
        height: 60,
        borderWidth: 1,
        borderColor: 'rgba(128, 130, 140, 0.31)',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    align:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img1:{
        width: 30,
        height: 30,
        right: 5
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12.5,

        color: '#000000',
    },
    img2:{
        width: 45,
        height: 45
    }
})

export const global = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    freetipscontainer:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    aligntext:{
        width: '65%',
        padding: 20,
    },
    title:{
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 12,

        color: '#4D5661'
    },
    subtitle:{
        marginTop: 8,

        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,

        color: '#80828C'
    },
    img:{
        width: 27.2,
        height: 99.7,
        top: 18,
        right: 20
    },
    space:{
        height: '2%',
        width: '100%'
    },
    backgroundend:{
        backgroundColor: '#FFFFFF',
        height: '100%',
        alignItems: 'center',
    }
})