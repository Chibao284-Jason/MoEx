import { variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  containerTextInputPhone: ViewStyle
  containerTextInputPress: ViewStyle
  touchFlag: ViewStyle
  verticalLine: ViewStyle
  textEnterInputPhone: TextStyle
  textInputPress: TextStyle
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
  containerTextInputPress: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: variableGlobal.borderRadiusCard,
    borderWidth: 1,
    borderColor: colors.borderColorCard,
    backgroundColor: colors.backgroundTextInputPress
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
  textInputPress: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    color: colors.heading,
    fontWeight: '600'
  },
  areaCode: {
    fontSize: 18,
    color: colors.heading
  }
})