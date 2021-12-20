import { variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
import { colorsTheme } from "@config";
type Styles = {
  container: ViewStyle,
  viewDesc: ViewStyle,
  button: ViewStyle,
  viewRoundButton: ViewStyle,
  textHeading: TextStyle,
  textDesc: TextStyle,

}
export const style = (colors: ThemeColors): Styles => ({
  container: {
    flexDirection: 'row',
    paddingHorizontal: variableGlobal.paddingHorizontalGlobal,
    backgroundColor: colors.backgroundCard,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: variableGlobal.paddingVerticalGlobal,
  },
  viewDesc: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    backgroundColor: colorsTheme.persianBlue
    , borderRadius: 50
  },
  viewRoundButton: {
    borderRadius: 50,
    borderWidth: 0.2,
    padding: 3,
    borderColor: colorsTheme.athensGray
  },
  textHeading: {
    color: colors.heading,
    fontSize: 18,
    fontWeight: '700'
  },
  textDesc: {
    color: colors.textDesc,
    marginTop: 10,
    fontSize: variableGlobal.fontSizeGlobal
  }
})