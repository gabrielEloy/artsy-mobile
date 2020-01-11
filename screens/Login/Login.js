//react
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//custom components
import HexagonalButton from '../../components/HexagonalButton';
//assets
import ArtsyFox from '../../assets/ilustrations/ArtsyFox.png';
import colors from '../../constants/styling/Colors';
//icons
import ClipBoard from '../../assets/Icons/ClipBoard';
import Lock from '../../assets/Icons/Lock';
import Incognito from '../../assets/Icons/Incognito';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.mainTitle}>Artsy</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.bottomButtonContainer}>
                <HexagonalButton 
                  Icon={ClipBoard}
                  style={styles.buttonMarginBottom}/>
                <Text style={styles.optionsText}>Register</Text>
              </View>
              <View>
              <Text style={styles.optionsText}>Login</Text>
                <HexagonalButton 
                Icon={Lock}
                iconPosition={styles.lockIcon}
                style={styles.buttonMarginTop}/>
              </View>
              <View style={styles.bottomButtonContainer}>
                <HexagonalButton 
                Icon={Incognito}
                iconPosition={styles.incognitoIcon}
                style={styles.buttonMarginBottom}/>
                <Text style={styles.optionsText}> Incognito </Text>
              </View>
            </View>
            <View style={styles.image}>
              <Image source={ArtsyFox} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sandBackground,
        alignItems: 'center'
    },
    mainTitle: {
        fontFamily: 'KaushanScript-Regular', 
        fontSize: 80,
        color: colors.textGold
    },
    lockIcon: {
      left: '25%',
      top: '30%'
    },
    buttonsContainer: {
      flexDirection: 'row',
      flex: 2,
      justifyContent: 'space-between',
      width: '80%'
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center'
    },
    image: {
      flex: 2,
      justifyContent: 'flex-end'
    },
    incognitoIcon: {
      left: '11%',
      top: '23%'
    },
    bottomButtonContainer: {
      justifyContent: 'flex-end'
    },
    topButtonContainer: {
      justifyContent: 'flex-start'
    },
    optionsText: {
      fontSize: 22,
      fontFamily: 'KaushanScript-Regular',
      textAlign: 'center'
    },
    buttonMargintop: {
        marginTop: 5
    },
    buttonMargintopBottom: {
      marginBottom: 5
    }
  
})

export default Login;
