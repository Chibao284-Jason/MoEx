import { colorsTheme, variableGlobal } from "@config";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
type Styles = {
  containerHistory: ViewStyle
  containerHistoryScreen: ViewStyle
  containerHistoryDetail: ViewStyle
  bodyHistoryDetail: ViewStyle
  viewBodyHistoryDetail: ViewStyle
  viewHorizontal: ViewStyle
  viewCoverStatusAndValue: ViewStyle
  viewStatus: ViewStyle
  bottomSheetContainer: ViewStyle
  bottomSheetWrapper: ViewStyle
  imgCoinHistoryDetail: ImageStyle
  textValue: TextStyle
  textStatus: TextStyle
}
export const widthImg = 70
export const style = (colors: ThemeColors): Styles => ({
  containerHistoryScreen: {
    backgroundColor: colors.backgroundGlobal,
    flex: 1,
  },
  containerHistory: {
    flex: 1,
    paddingHorizontal: variableGlobal.paddingHorizontalGlobal
  },
  containerHistoryDetail: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal,

  },
  bodyHistoryDetail: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: colors.backgroundHistoryDetail,
  },
  imgCoinHistoryDetail: {
    borderRadius: widthImg / 2,
    marginBottom: -widthImg / 2,
    alignSelf: 'center',
    zIndex: 1,
  },
  viewBodyHistoryDetail: {
    backgroundColor: colors.backgroundItem,
    width: '100%',
    borderRadius: 20,
  },
  viewHorizontal: {
    marginTop: widthImg / 2 + 15,
    marginBottom: widthImg / 2,
    paddingHorizontal: 20,
  },
  viewCoverStatusAndValue: {
    width: '100%',
    alignItems: 'center',
  },
  textValue: {
    fontWeight: '700',
    fontSize: 28,
    color: colors.heading

  },
  viewStatus: {
    backgroundColor: colors.backgroundStatusHistory,
    borderRadius: 5,
    marginTop: 15,
  },
  textStatus: {
    color: colorsTheme.mountainMeadow,
    marginHorizontal: 15,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  bottomSheetWrapper: {
    backgroundColor: '#8C8C8C9A',
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.backgroundGlobal,
  }
})