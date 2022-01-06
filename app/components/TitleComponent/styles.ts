import { colorsTheme } from "@config";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
type Styles = {
  container: ViewStyle
  containerTitleHistory: ViewStyle
  textTitle: TextStyle
  textTitleHistory: TextStyle
  textSubtitleHistory: TextStyle
  textTitleAliasHistory: TextStyle
  viewSubTitle: ViewStyle

}
export const widthImg = 70
export const style = (colors: ThemeColors): Styles => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  containerTitleHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  viewSubTitle: {},
  textTitle: {
    color: colors.heading,
    fontSize: 18,
    fontWeight: '700'
  },
  textTitleHistory: {
    color: '#808292',
    fontSize: 16,
  },
  textSubtitleHistory: {
    color: colors.heading,
    fontSize: 16
  },
  textTitleAliasHistory: {
    color: colors.textDesc,
    fontSize: 14,
    textAlign: 'right'
  },

})