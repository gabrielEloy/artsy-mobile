import React, {Component} from 'react';
import Svg, {Path} from 'react-native-svg';

export default class ClipBoard extends Component {
  render() {
    const {props} = this.props;
    return (
      <Svg width={38} height={53} viewBox="0 0 38 53" fill="none" {...props}>
        <Path
          d="M2 10.16V49a2 2 0 002 2h30a2 2 0 002-2V10.16a2 2 0 00-2-2H4a2 2 0 00-2 2z"
          stroke="#938935"
          strokeWidth={3}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.123 5.1c-.6 1.783-2.22 3.06-4.123 3.06s-3.523-1.277-4.123-3.06h-4.134c-.537 0-.972.457-.972 1.02v5.1H29.2v-5.1c0-.563-.435-1.02-.971-1.02h-5.106z"
          fill="#938935"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 9.18c2.414 0 4.371-2.055 4.371-4.59C23.371 2.055 21.414 0 19 0c-2.414 0-4.371 2.055-4.371 4.59 0 2.535 1.957 4.59 4.371 4.59zm0-3.06c.805 0 1.457-.685 1.457-1.53S19.805 3.06 19 3.06s-1.457.685-1.457 1.53.652 1.53 1.457 1.53z"
          fill="#938935"
        />
        <Path
          fill="#938935"
          d="M6.857 20.4h24.286v2.04H6.857zM6.857 36.72h24.286v2.04H6.857zM6.857 28.56h24.286v2.04H6.857z"
        />
      </Svg>
    );
  }
}
