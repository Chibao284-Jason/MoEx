import { colorsTheme, variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  tabBarTopContainer: ViewStyle
  containerTopTab: ViewStyle
  containerTopTabExchange: ViewStyle
  containerTabBarExchange: ViewStyle
  indicatorStyle: ViewStyle
  labelStyle: TextStyle
  subTitleStyle: TextStyle
}

export const style = (colors: ThemeColors): Styles => ({
  tabBarTopContainer: {
    backgroundColor: colors.backgroundGlobal,
  },
  containerTopTab: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,

  },
  containerTopTabExchange: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,
    flexDirection: 'row'
  },
  containerTabBarExchange: {
    backgroundColor: colors.backgroundGlobal,
    flexDirection: 'row'
  },
  labelStyle: {
    fontWeight: variableGlobal.fontWeightHeader,
    color: colors.heading
  },
  indicatorStyle: {
    backgroundColor: colors.focusTopTab,
    height: 2
  },
  subTitleStyle: {
    color: colorsTheme.grayApprox,
    marginLeft: 10,
  },
})