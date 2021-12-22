import { variableGlobal } from "@config";
import { TextStyle, ViewStyle } from "react-native";
type Styles = {
  containerCardIntroduce: ViewStyle
  viewUserName: ViewStyle
  viewTouchRefer: ViewStyle
  textUserName: TextStyle
  textDesc: TextStyle
  textViewAll: TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerCardIntroduce: {
    borderRadius: variableGlobal.borderRadiusCard,
    borderWidth: 1,
    backgroundColor: colors.backgroundItem,
    borderColor: colors.borderColorCard,
    marginTop: 20,
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
  },
  viewTouchRefer: {
    marginVertical: 15,
    marginLeft: variableGlobal.marginLeftCard,

  },
  textViewAll: {
    color: colors.textViewAll,
    fontWeight: '700',
    marginTop: 10
  },

})