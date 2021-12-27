import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" {...props}>
    <Path
      stroke="#05B169"
      strokeWidth={1.5}
      fill="none"
      d="m0 33.03 5 1.874 5-.914 5 1.82 5-4.23 5-2.09L30 40l5-3.911 5 1.064 5-2 5-4.69 5-6.162 5-.17 5-3.247 5 .217 5 2.203 5-16.148 5-6.091 5 6.675 5 4.496 5-5.218 5-1.293L110 0l5 2.143"
    />
    <Defs>
      <LinearGradient id="a" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop
          offset="0%"
          style={{
            stopColor: '#05b169',
            stopOpacity: 0.8,
          }}
        />
        <Stop
          offset="25%"
          style={{
            stopColor: '#05b169',
            stopOpacity: 0,
          }}
        />
      </LinearGradient>
    </Defs>
    <Path
      fill="url(#a)"
      d="M0 40v-6.97l5 1.874 5-.914 5 1.82 5-4.23 5-2.09L30 40l5-3.911 5 1.064 5-2 5-4.69 5-6.162 5-.17 5-3.247 5 .217 5 2.203 5-16.148 5-6.091 5 6.675 5 4.496 5-5.218 5-1.293L110 0l5 2.143L120 120"
    />
  </Svg>
);

export default SvgComponent;
