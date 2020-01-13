//react
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//assets
import ArtsyFox from '../assets/ilustrations/ArtsyFox.png';
import colors from '../constants/styling/Colors';

const Login = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Artsy</Text>
      </View>
      <View style={styles.contentContainer}>{children}</View>
      <View style={styles.image}>
        <Image source={ArtsyFox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.sandBackground,
    flex: 1,
  },
  contentContainer: {
    flex: 2,
  },
  image: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  mainTitle: {
    color: colors.textGold,
    fontFamily: 'KaushanScript-Regular',
    fontSize: 80,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
});

export default Login;
