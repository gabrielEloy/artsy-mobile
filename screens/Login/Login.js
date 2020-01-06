//react
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//custom components
import HexagonalButton from '../../components/HexagonalButton';
//assets
import ArtsyFox from '../../assets/ilustrations/ArtsyFox.png'
import colors from '../../constants/styling/Colors';
import ClipBoard from '../../assets/Icons/ClipBoard';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Artsy</Text>
            <HexagonalButton Icon={ClipBoard}/>
            <Image source={ArtsyFox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sandBackground,
        justifyContent: 'flex-end'
    },
    mainTitle: {
        fontFamily: 'KaushanScript-Regular', 
        fontSize: 80,
        color: colors.textGold
    }
})

export default Login;
