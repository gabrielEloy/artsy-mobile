import React, { Component } from "react";
import PropTypes from 'prop-types';

import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default class HexagonalButton extends Component {
  render(){
    const { Icon, iconPosition, style } = this.props
  return (
      <View style={style}>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
          <View style={{position: 'relative', width: 95, height: 115}}>
            <Svg 
            width={95} 
            height={115} 
            viewBox="0 0 95 115" 
            fill="none"
            style={styles.button}>
              <Path
                d="M4.302 30.997L47.5 4.684l43.198 26.313v53.006L47.5 110.316 4.302 84.003V30.997z"
                fill="#000"
                stroke="#9F9D87"
                strokeWidth={8}
              />
            </Svg>
            <View style={styles.icon(iconPosition)}>
              <Icon />
            </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative'
  },
  icon: (positionProps) => {
    return {
      position: 'absolute',
      left: '30%',
      top: '27%',
      ...positionProps
    }
  }
});

// HexagonalButton.propTypes = {
  // Icon: PropTypes.element.isRequired,
  // Title: PropTypes.shape({
  //   text: PropTypes.string.isRequired,
  //   position: PropTypes.oneOf(['top', 'bottom'])
  // })
// }