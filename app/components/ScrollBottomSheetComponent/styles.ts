import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const colors = {
    white: '#FFFFFF',
    white1: '#D9D9D9',
    white2: '#F5F5F5',
    white3: '#eef7fe',
    black: '#333333',
    black1: '#262626',
    black2: '#595959',
    black_transparent: 'rgba(0,0,0,0.25)',
    green: '#2EB553',
    green1: '#4DD077',
    green2: '#8CE1A7',
    yellow: '#FFEC3D',
    yellow1: '#FFF566',
    yellow2: '#FFFB8F',
    purple: '#722ED1',
    purple1: '#9254DE',
    purple2: '#B37FEB',
    blue: '#4D89FF',
    blue1: '#69C0FF',
    blue2: '#91D5FF',
    blue3: '#BAE7FF',
    lightblue: '#F1F6FF',
    lightblue1: '#1890FF',
    cyan: '#13C2C2',
    cyan1: '#36CFC9',
    cyan2: '#5CDBD3',
    red: '#F5222D',
    red1: '#FF4D4F',
    red2: '#FF7875',
    red3: '#FFA39E',
    gray: '#8C8C8C',
    gray1: '#BFBFBF',
    gray2: '#E6E7E9',
    gray3: '#E8E8E8',
    gray4: '#F5F5F5',
    gray5: '#BFBFBF',
    orange: '#FA8C16',
    orange1: '#FFA940',
    orange2: '#FFC069',
    orange3: '#FF9C6E',
    orange4: '#FFBB96',
    orange5: '#FFD8BF',
    gray_blur:"#97a0a8",
    blue_black : "#001026",
    pink:"#ffb6f0",
    // purple:"#ffb6f0",
    gray_blue:"#eaeef7",
    gardient_from_background:"#fdfdfd",
    gardient_end_background :"#d0dff2",
    gardient_from_button:"#8d70a8",
    gardient_end_button:"#e8599b",
    line:"#c3ccd5",
    transparent:"#ffffff00",
    forgot_color:'#9f5394',
    background_drawer : '#f0f8ff',
    yellow_contract:'#f2bd37',
    blue_contract : '#00aeef',
    green_contract : '#a1a1a1',
    gray_contract :'#a378b0',
    color_calendar:'#e8eff7',
    coral:'#ff7f50',
    thistle:'#d8bfd8',
    palevioletred:'#db7093'
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    
  },
  imageBackground :{
    width: screenWidth,
    height:screenHeight*0.9/2,
    resizeMode:'cover'


  },
  viewDetail :{
      bottom:40,
      paddingVertical:20,
      backgroundColor:'white',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      
      
  },
  nameAnimal :{
      fontSize:17,
      fontWeight: '700',
      color:colors.green

  }
 
});

export default styles;
