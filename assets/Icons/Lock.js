import React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={48} height={49} viewBox="0 0 48 49" fill="none" {...props}>
      <Circle cx={24} cy={24} r={24} fill="#938935" />
      <Path d="M28.393 22l4.383 17.98-17.678.02 3.795-18h9.5z" fill="#3D3C3A" />
      <Ellipse cx={23.893} cy={17} rx={7.5} ry={7} fill="#3D3C3A" />
    </Svg>
  )
}

export default SvgComponent
