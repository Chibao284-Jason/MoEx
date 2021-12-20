import { variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
import { colorsTheme } from "@config";
type Styles = {
  containerBody: ViewStyle,
  container: ViewStyle,
  viewCard: ViewStyle,
  viewDesc: ViewStyle,
  button: ViewStyle,
  viewSignalStatus: ViewStyle,
  textHeading: TextStyle,
  textDesc: TextStyle,
  textSignalStatus: TextStyle,
  textViewAll: TextStyle

}
export const style = (colors: ThemeColors): Styles => ({
  containerBody: {
    marginHorizontal: variableGlobal.marginHorizontalGlobal,
    marginBottom: variableGlobal.marginBottomCard,

  },
  container: {
    marginBottom: 20
  },
  viewCard: {
    marginTop: variableGlobal.marginTopGlobal,
    flexDirection: 'row',
    backgroundColor: colors.backgroundItem,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: "center",
    borderWidth: 1,
    borderRadius: variableGlobal.borderRadiusCard,
    paddingVertical: variableGlobal.marginVerticalCard,
    borderColor: colors.borderColorCard
  },
  viewDesc: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: colorsTheme.persianBlue
    backgroundColor: 'pink',
    borderRadius: 50
  },
  viewSignalStatus: {
    alignItems: 'center',
    backgroundColor: '#2E9BFF',
    width: '80%',
    paddingVertical: 5,
    borderRadius: variableGlobal.borderRadiusCard
  },
  textHeading: {
    color: colors.heading,
    fontSize: 18,
    fontWeight: '500'
  },
  textDesc: {
    color: colors.textDesc,
    marginTop: 5,
    fontSize: variableGlobal.fontSizeGlobal
  },
  textSignalStatus: {
    color: colors.textSignalStatus,
    fontWeight: '600'
  },
  textViewAll: {
    color: colors.textViewAll,
    fontWeight: '600'
  }
})