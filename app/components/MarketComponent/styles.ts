
import { colorsTheme } from "@config";
import { TextStyle, ViewStyle, ImageStyle } from "react-native";
type Styles = {
  containerCategories: ViewStyle,
  containerWatchList: ViewStyle,
  viewBodyWatchList: ViewStyle,
  viewBodyCategories: ViewStyle,
  searchContainer: ViewStyle,
  containerMarketList: ViewStyle,
  containerIndexMarket: ViewStyle,
  viewTitle: ViewStyle,
  viewTitlePrice: ViewStyle,
  viewCardCoin: ViewStyle,
  viewImgCoin: ViewStyle,
  viewSvg: ViewStyle,
  viewUnit: ViewStyle,
  viewPricePercent: ViewStyle,
  imgCoin: ImageStyle,
  input: TextStyle
  textTitle: TextStyle
  textNameCoin: TextStyle
  textPercent: TextStyle,
  viewButtonAdd: ViewStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerIndexMarket: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal
  },
  containerWatchList: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,
    marginHorizontal: 20
  },
  containerCategories: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal
  },
  containerMarketList: {
    backgroundColor: colors.backgroundGlobal
  },
  searchContainer: {
    height: 40,
    backgroundColor: colors.backgroundItem,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 10,
    borderColor: colors.borderColorCard,
    paddingHorizontal: 20
  },
  input: {
    fontSize: 14,
    flex: 1,
    color: colors.textCard,
    paddingVertical: 5
  },
  viewTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    color: colors.textDesc
  },
  viewTitlePrice: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  textNameCoin: {
    color: colors.textNameCoin,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 4
  },
  textPercent: {
    color: colorsTheme.mountainMeadow,
    fontWeight: '600'
  },
  viewCardCoin: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  viewImgCoin: {
    flexDirection: 'row'
  }, imgCoin: {
    marginRight: 10
  },
  viewSvg: {
    justifyContent: 'center'
  },
  viewPricePercent: {
    flexDirection: 'row',
  },
  viewUnit: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  viewBodyWatchList: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  viewBodyCategories: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  viewButtonAdd: {
    marginBottom: 50
  }
})