import { colorsTheme } from '@config';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from "react-native-paper";
type Styles = {
  containerLoginScreen: ViewStyle,
  containerLogin: ViewStyle,
  labelStyle: TextStyle,
  labelWelcome: TextStyle
  labelLogo: TextStyle,
  buttonSubmit: ViewStyle
  titleSubmit: TextStyle
  textAlreadySubmit: TextStyle
  viewAlready: ViewStyle
  touchAlready: ViewStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerLoginScreen: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,
    justifyContent: 'center',

  },
  containerLogin: {
    marginHorizontal: 20
  },
  labelStyle: {
    fontSize: 12,
  },
  labelWelcome: {
    color: colors.heading,
    fontSize: 30,
    fontWeight: '300',
    paddingHorizontal: 20,
    marginVertical: 15,
    textAlign: 'center'
  },
  labelLogo: {
    color: colors.heading,
    fontSize: 30,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 20
  }, buttonSubmit: {
    backgroundColor: colorsTheme.persianBlue,
    paddingVertical: 15,
    marginVertical: 0
  },
  titleSubmit: {
    color: 'white',
    fontSize: 18
  },
  textAlreadySubmit: {
    color: colors.textViewAll,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 5
  },
  touchAlready: {
    justifyContent: 'center'
  },
  viewAlready: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  }
});
