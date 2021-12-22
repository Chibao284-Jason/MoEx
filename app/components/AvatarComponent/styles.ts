import { variableGlobal } from "@config";
import { TextStyle, ViewStyle } from "react-native";
type Styles = {
  containerAvatar: ViewStyle
  viewUserName: ViewStyle
  textUserName: TextStyle
  textDesc: TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerAvatar: {
    flexDirection: 'row',
    marginHorizontal: variableGlobal.marginHorizontalGlobal
  },
  viewUserName: {
    justifyContent: 'space-around',
    marginLeft: variableGlobal.marginLeftCard
  },
  textUserName: {
    color: colors.heading,
    fontSize: variableGlobal.fontSizeHeader,
    fontWeight: '700'
  },
  textDesc: {
    color: colors.textDesc,
    fontSize: variableGlobal.fontSizeGlobal,
    fontWeight: variableGlobal.fontWeightHeader
  }
})