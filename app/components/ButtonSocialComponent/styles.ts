import { ViewStyle, TextStyle } from "react-native";

type Styles = {
  containerButtonSocial: ViewStyle
  containerButtonSocialSquare: ViewStyle
  touchSocial: ViewStyle
  touchSocialSquare: ViewStyle
  labelSocial: TextStyle

}
export const style = (colors: ThemeColors): Styles => ({
  containerButtonSocial: {
    marginTop: 10
  },
  containerButtonSocialSquare: {
    width: "30%",
    marginHorizontal: 5
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
  touchSocialSquare: {
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: colors.borderColorCard,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.backgroundLogOutButton,

  },
  labelSocial: {
    color: colors.heading,
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 20
  }
})
