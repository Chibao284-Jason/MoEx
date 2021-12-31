import { ViewStyle, TextStyle } from "react-native";

type Styles = {
  containerButtonSocial: ViewStyle
  touchSocial: ViewStyle
  labelSocial: TextStyle

}
export const style = (colors: ThemeColors): Styles => ({
  containerButtonSocial: {
    marginTop: 10
  },
  touchSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: colors.borderColorCard,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  labelSocial: {
    color: colors.heading,
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 20
  }
})
