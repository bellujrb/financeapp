import React from "react";
import { View, Text, Image} from "react-native";
import { styles } from "../../styles/home/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { CubeIcon } from "../../components/home/CubeIcon";

import icon1 from '../../../assets/icons/icon1.png'
import notify from '../../../assets/icons/notify.png'

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.containerheader}>
            <View style={styles.alignitens}>

            <View style={styles.containericons}>
                <CubeIcon img={icon1}/>
                <CubeIcon img={notify}/>
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

            <View style={styles.align}>
                <LinearGradient colors={['#DCDCDC', '#5857CD']}style={styles.gradiantRectangle}>
                    <Text style={styles.titlegradiant}>Seu gasto</Text>
                    <Text style={styles.subtitlegradiant}>R$ 132.99</Text>
                </LinearGradient>
                
                <View style={styles.infospent}>

                    <View style={styles.circlespent}>
                        <Image
                            source={require('../../../assets/utils/money.png')}
                            style={styles.circlespentimg}/>
                    </View>

                    <View style={styles.align2}>
                        <Text style={styles.titlespent}>Gasto do Dia</Text>
                        <Text style={styles.subtitlespent}>01/03/2023</Text>
                    </View>

                    <View style={styles.linespent}/>

                    <View style={styles.align2}>
                        <Text style={styles.titlespent2}>R$ 132.99</Text>
                        
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={styles.subtitlespent2}>+4.3% x </Text>
                            <Text style={styles.subtitlespent21}>semana passada</Text>
                        </View>
                    </View>
                </View>

                
            </View>
            
            <Text style={styles.titleexpense}>Despesas Recentes</Text>

            <View style={styles.align2}>
            <View style={styles.rectangleexpenses}>
                
                <View style={styles.circleexpenses}>
                    <Image
                    source={require('../../../assets/utils/creditcard.png')}
                    style={styles.circleexpensesimg}/>
                </View>

                <View style={styles.align2}>
                        <Text style={styles.rectangletitleexpenses}>Netflix</Text>
                        <Text style={styles.rectanglesubtitleexpenses}>Assinatura</Text>
                </View>

                <View style={styles.align2}>
                        <Text style={styles.rectangletitleexpenses2}>R$ 29.00</Text>
                        <Text style={styles.rectanglesubtitleexpenses2}>G. Moderado</Text>
                </View>
            </View>
        </View> 
        </View>
    )
}