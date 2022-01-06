import { ViewStyle, TextStyle } from "react-native";

type Styles = {
  containerRegisterScreen: ViewStyle
  containerRegister: ViewStyle
  titleStyles: TextStyle
  titlePhone: TextStyle
  titleUseEmail: TextStyle
  buttonSubmit: ViewStyle
  titleSubmit: TextStyle,
  viewButtonSocial: ViewStyle
  viewButtonSocialApple: ViewStyle
  viewHorizontal: ViewStyle
  viewLabelPhone: ViewStyle
  viewDescRegister: TextStyle
}

export const style = (colors: ThemeColors): Styles => ({
  containerRegisterScreen: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,

  },
  containerRegister: {
    flex: 1,
    marginHorizontal: 20
  },
  titleStyles: {
    fontSize: 28,
  },
  titlePhone: {
    fontSize: 14,
    fontWeight: 'normal'
  },
  titleUseEmail: {
    color: colors.textViewAll,
    fontWeight: '700',
  },
  buttonSubmit: {
    backgroundColor: colors.backgroundButtonSubmit,
    paddingVertical: 15,
    marginTop: 30
  },
  titleSubmit: {
    color: 'white',
    fontSize: 18
  },
  viewButtonSocial: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  viewButtonSocialApple: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  viewHorizontal: {
    marginHorizontal: 0,
    paddingHorizontal: 0
  },
  viewLabelPhone: {
    marginVertical: 10,
  },
  viewDescRegister: {
    marginVertical: 30,
    color: colors.textDesc
  }
}) 