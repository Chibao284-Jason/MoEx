import { variableGlobal } from "@config";
import { TextStyle, ViewStyle, ImageStyle } from "react-native";
type Styles = {
  containerExchangeCard: ViewStyle
  viewBodyCard: ViewStyle
  viewBalance: ViewStyle
  viewBalanceContent: ViewStyle
  viewMax: ViewStyle
  viewIcon: ImageStyle
  viewItem: ViewStyle
  textLabel: TextStyle
  textViewAll: TextStyle
  textNumber: TextStyle
  textNameCoin: TextStyle
  textMax: TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerExchangeCard: {
    borderRadius: variableGlobal.borderRadiusCard,
    borderWidth: 1,
    backgroundColor: colors.backgroundCardSignal,
    borderColor: colors.borderColorCard,
    marginTop: 20,
  },

  textLabel: {
    color: colors.textDesc,
    fontSize: variableGlobal.fontSizeGlobal,
  },
  viewBodyCard: {
    margin: variableGlobal.marginLeftCard,

  },
  textViewAll: {
    color: colors.textViewAll,
    fontWeight: '700',
    marginTop: 10
  },
  viewBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewBalanceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25
  },
  textNumber: {
    color: colors.heading,
    fontSize: 20,
    fontWeight: '700'
  },
  textNameCoin: {
    color: colors.heading,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 4
  },
  viewItem: {
    marginHorizontal: 15
  },
  viewMax: {
    marginHorizontal: 15,
    padding: 8,
    backgroundColor: colors.backgroundButtonCard,
    borderRadius: variableGlobal.borderRadiusCard
  },
  viewIcon: {
    marginHorizontal: 5
  },
  textMax: {
    color: colors.textViewAll,
    fontWeight: '700',
  },

})