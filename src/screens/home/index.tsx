import React from "react";
import { View, Text, Image} from "react-native";
import { styles } from "../../styles/home/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.containerheader}>
            <View style={styles.alignitens}>

            <View style={styles.containericons}>
                <TouchableOpacity style={styles.cubeicon}>
                        <Image
                            source={require('../../../assets/icons/icon1.png')}
                            style={{
                                width: 18,
                                height: 18,
                        }}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cubeicon}>
                        <Image
                            source={require('../../../assets/icons/notify.png')}
                            style={{
                                width: 17,
                                height: 20,
                        }}/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.organizetexts}>
                <Text style={styles.title}>Seja bem-vindo </Text>
                <Text style={styles.subtitle}>Belluzzo</Text>
            </View>

            </View>

            <TouchableOpacity style={styles.rectanglestate}>
                <Text style={styles.titlestate}>STATUS</Text>
                <Text style={styles.subtitlestate}>GASTO MODERADO</Text>
            </TouchableOpacity>
            </View>

            <View style={{
                alignItems: 'center'
            }}>
                <LinearGradient colors={['#DCDCDC', '#5857CD']}style={{
                    marginTop: 20,

                    height: 137,
                    width: 343.76,
                    backgroundColor: '#5857CD',
                    borderRadius: 20,

                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: 16,
                        letterSpacing: 0.5,

                        color: '#201937',
                        opacity: 0.7
                    }}>Seu gasto</Text>
                    <Text style={{
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: 32,
                        letterSpacing: 0.5,

                        color: '#201937',
                    }}>R$ 132.99</Text>
                </LinearGradient>
                
                <View style={{
                    marginTop: 30,

                    width: 343,
                    height: 84,
                    backgroundColor: '#322846',
                    borderRadius: 15,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>

                    <View style={{
                        width: 52,
                        height: 52,
                        borderRadius: 52,

                        backgroundColor: '#201937'
                    }}>
                        <Image
                            source={require('../../../assets/utils/money.png')}
                            style={{
                                width: 40,
                                height: 60,
                                bottom: 5,
                                left: 5
                        }}/>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: 12,

                            color: '#FFFFFF'
                        }}>Gasto do Dia</Text>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: 10,

                            color: '#FFFFFF'
                        }}>01/03/2023</Text>
                    </View>

                    <View style={{
                        height: 40,
                        width: 0,
                        
                        backgroundColor: '#4A3D65',
                        borderWidth: 1,
                        borderColor: '#4A3D65'
                        
                    }}/>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: 18,

                            color: '#FFFFFF'
                        }}>R$ 132.99</Text>
                        
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                fontSize: 10,
    
                                color: '#AFFEAD'
                            }}>+4.3% x </Text>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                fontSize: 10,
    
                                color: '#FFFFFF'
                            }}>semana passada</Text>
                        </View>
                    </View>
                </View>

                
            </View>
            
            <Text style={{
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: 15,

                    color: '#FFFFFF',
                    padding: 20
            }}>Despesas Recentes</Text>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <View style={{
                    width: 343,
                    height: 84,
                    backgroundColor: '#322846',
                    borderRadius: 15,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row'
            }}>
                
                <View style={{
                    height: 40,
                    width: 40,
                    borderRadius: 40,

                    backgroundColor: '#201937',

                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                    source={require('../../../assets/utils/creditcard.png')}
                    style={{
                        width: 24,
                        height: 24
                    }}/>
                </View>

                <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: 16,

                            color: '#FFFFFF'
                        }}>Netflix</Text>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: 14,

                            color: '#707070'
                        }}>Assinatura</Text>
                </View>

                <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: 16,

                            color: '#FFFFFF'
                        }}>R$ 29.00</Text>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: 10,

                            color: '#AFFEAD'
                        }}>G. Moderado</Text>
                </View>
            </View>
        </View> 
        </View>
    )
}