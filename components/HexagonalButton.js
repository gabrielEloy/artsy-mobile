import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default class HexagonalButton extends Component {
  render(){
    console.log(this.props)
    const { Icon } = this.props
  return (
      <>
      <TouchableOpacity>
        <Icon />
        {/* <View style={{position: 'relative', width: 95, height: 115}}>
          <Svg width={95} height={115} viewBox="0 0 95 115" fill="none">
            <Path
              d="M4.302 30.997L47.5 4.684l43.198 26.313v53.006L47.5 110.316 4.302 84.003V30.997z"
              fill="#000"
              stroke="#9F9D87"
              strokeWidth={8}
            />
          </Svg>
            <View style={{position: 'absolute', left: '50%', top: '50%'}}>
              {Icon}
            </View>
          </View> */}
      </TouchableOpacity>
      </>
    )
  }
}

const styles = StyleSheet.create({

});

HexagonalButton.propTypes = {
  // Icon: PropTypes.element.isRequired,
  // Title: PropTypes.shape({
  //   text: PropTypes.string.isRequired,
  //   position: PropTypes.oneOf(['top', 'bottom'])
  // })
}