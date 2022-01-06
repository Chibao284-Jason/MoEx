import { variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  containerTextInputPhone: ViewStyle
  touchFlag: ViewStyle
  verticalLine: ViewStyle
  textEnterInputPhone: TextStyle
  areaCode: TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerTextInputPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: variableGlobal.borderRadiusCard,
    borderWidth: 1,
    borderColor: colors.borderColorCard,
    backgroundColor: colors.backgroundItem
  },
  touchFlag: { flexDirection: 'row', alignItems: 'center' },
  verticalLine: {
    width: 1, height: "100%",
    backgroundColor: colors.borderColorCard,
    marginHorizontal: 20
  },
  textEnterInputPhone: {
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
    color: colors.heading
  },
  areaCode: {
    fontSize: 18,
    color: colors.heading
  }
})