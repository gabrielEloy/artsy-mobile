//react
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//custom components
import ArtsyBackground from '../../components/ArtsyBackground';
import HexagonalButton from '../../components/HexagonalButton';
//assets
import colors from '../../constants/styling/Colors';
//icons
import ClipBoard from '../../assets/Icons/ClipBoard';
import Lock from '../../assets/Icons/Lock';
import Incognito from '../../assets/Icons/Incognito';

const Login = () => {
  return (
    <ArtsyBackground>
      <View style={styles.buttonsContainer}>
        <View style={styles.bottomButtonContainer}>
          <HexagonalButton Icon={ClipBoard} style={styles.buttonMarginBottom} />
          <Text style={styles.optionsText}>Register</Text>
        </View>
        <View>
          <Text style={styles.optionsText}>Login</Text>
          <HexagonalButton
            Icon={Lock}
            iconPosition={styles.lockIcon}
            style={styles.buttonMarginTop}
          />
        </View>
        <View style={styles.bottomButtonContainer}>
          <HexagonalButton
            Icon={Incognito}
            iconPosition={styles.incognitoIcon}
            style={styles.buttonMarginBottom}
          />
          <Text style={styles.optionsText}> Incognito </Text>
        </View>
      </View>
    </ArtsyBackground>
  );
};

const styles = StyleSheet.create({
  bottomButtonContainer: {
    justifyContent: 'flex-end',
  },
  buttonMargintop: {
    marginTop: 5,
  },
  buttonMargintopBottom: {
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
    width: '80%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.sandBackground,
    flex: 1,
  },
  image: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  incognitoIcon: {
    left: '11%',
    top: '23%',
  },
  lockIcon: {
    left: '25%',
    top: '30%',
  },
  mainTitle: {
    color: colors.textGold,
    fontFamily: 'KaushanScript-Regular',
    fontSize: 80,
  },
  optionsText: {
    fontFamily: 'KaushanScript-Regular',
    fontSize: 22,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  topButtonContainer: {
    justifyContent: 'flex-start',
  },
});

export default Login;
