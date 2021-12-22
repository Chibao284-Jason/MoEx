import { variableGlobal } from "@config";
import { ViewStyle, ImageStyle, TextStyle } from "react-native";
type Styles = {
  container: ViewStyle
  imgComing: ImageStyle
  textComing: TextStyle
  textGoBack: TextStyle
  buttonBack: ViewStyle
  viewBack: ViewStyle
}
export const style = (colors: ThemeColors): Styles => ({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,
    justifyContent: "center",
    alignItems: 'center'
  },
  imgComing: {

  },
  buttonBack: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundButton,
    padding: 10,
    borderRadius: variableGlobal.borderRadiusButton,
  },
  viewBack: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textComing: {
    color: colors.textViewAll,
    fontWeight: '700',
    fontSize: variableGlobal.fontSizeUpperCase,
    marginVertical: variableGlobal.marginVerticalCard
  },
  textGoBack: {
    marginLeft: 5,
    color: colors.textColorButton,
    fontWeight: variableGlobal.fontWeightHeader
  }

})