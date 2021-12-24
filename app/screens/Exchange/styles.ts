import { colorsTheme, variableGlobal } from "@config";
import { TextStyle, ViewStyle } from "react-native";

type Styles = {
  containerExchangeIndex: ViewStyle
  containerExchange: ViewStyle
  viewBody: ViewStyle
  viewResult: ViewStyle
  textResult: TextStyle
  textResultLabel: TextStyle
  textSwap: TextStyle
  viewTitleSwap: ViewStyle
  buttonSwap: ViewStyle

}

export const style = (colors: ThemeColors): Styles => ({
  containerExchangeIndex: {
    flex: 1,
    backgroundColor: colors.backgroundExchange
  },
  containerExchange: {
    justifyContent: 'center',
    flex: 1,
  },
  viewBody: {
    backgroundColor: colors.backgroundItem,
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 25,
    borderRadius: variableGlobal.borderRadiusButton
  },
  viewResult: {
    flexDirection: 'row',
    marginVertical: variableGlobal.marginVerticalCard,
    alignItems: 'flex-end'
  },
  textResult: {
    color: colors.heading,
    fontSize: 16,
    fontWeight: '700',
    flexWrap: 'wrap',
    marginLeft: 10,
    width: "95%"
  },
  textResultLabel: {
    color: colors.heading,
  },
  viewTitleSwap: {
    marginTop: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  buttonSwap: {
    backgroundColor: colors.backgroundSwapButton,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
  textSwap: {
    color: colors.labelSwap,
    fontSize: 18,
    fontWeight: '600'
  },
})