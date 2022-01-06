import { colorsTheme } from '@config';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from "react-native-paper";
type Styles = {
  containerForgotScreen: ViewStyle,
  containerLogin: ViewStyle,
  containerLoginInput: ViewStyle,
  labelStyle: TextStyle,
  labelWelcome: TextStyle
  labelLogo: TextStyle,
  buttonSubmit: ViewStyle
  viewHorizontal: ViewStyle
  titleSubmit: TextStyle
  titleStyles: TextStyle
  viewForgotPasswordDesc: TextStyle
  input: TextStyle
  textAlreadySubmit: TextStyle
  forgetPassword: TextStyle
  titleEmailAndPhone: TextStyle
  viewAlready: ViewStyle
  touchAlready: ViewStyle
  viewLabelPhoneAndEmail: ViewStyle
  viewButtonSocial: ViewStyle
  inputContainer: ViewStyle

}
export const style = (colors: ThemeColors): Styles => ({
  containerForgotScreen: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,
    justifyContent: 'center',

  },
  containerLoginInput: {
    flex: 1,
    marginHorizontal: 20
  },
  containerLogin: {
    marginHorizontal: 20,
    flex: 1,
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
  },
  buttonSubmit: {
    backgroundColor: colorsTheme.persianBlue,
    paddingVertical: 15,
    marginVertical: 30
  },
  viewHorizontal: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
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
  },
  titleStyles: {
    fontSize: 28,
  },
  viewLabelPhoneAndEmail: {
    marginVertical: 10,
  },
  viewButtonSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    height: 40,
    backgroundColor: colors.backgroundItem,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColorCard,
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 14,
    flex: 1,
    color: colors.textTitleMenu,
    paddingVertical: 5
  },
  forgetPassword: {
    color: colors.textViewAll,
    fontWeight: '700',
  },
  titleEmailAndPhone: {
    fontSize: 14,
    fontWeight: 'normal'
  },
  viewForgotPasswordDesc: {
    marginTop: 30,
    color: colors.textViewAll
  }
});
