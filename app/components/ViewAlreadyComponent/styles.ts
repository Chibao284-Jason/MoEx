import { ViewStyle, TextStyle } from "react-native";

type Styles = {
  viewAlready: ViewStyle
  textAlreadySubmit: TextStyle
  touchAlready: ViewStyle
}

export const style = (colors: ThemeColors): Styles => ({
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
  }
})