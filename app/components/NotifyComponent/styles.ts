import { variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  containerBody: ViewStyle,
  container: ViewStyle,
  viewTitle: ViewStyle,
  viewCard: ViewStyle,
  viewDesc: ViewStyle,
  textHeading: TextStyle,
  textDesc: TextStyle,
  textTime: TextStyle,
  textViewAll: TextStyle

}
export const style = (colors: ThemeColors): Styles => ({
  containerBody: {
    marginHorizontal: variableGlobal.marginHorizontalGlobal,
    marginBottom: variableGlobal.marginTopGlobal,
  },
  viewTitle: {
    marginBottom: variableGlobal.marginBottomTitle
  },
  container: {
    marginBottom: variableGlobal.marginBottomTitle
  },
  viewCard: {
    marginTop: variableGlobal.marginTopGlobal,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  viewDesc: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
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
  textTime: {
    color: colors.textDesc,
    marginTop: 10,
    fontSize: variableGlobal.fontSizeGlobal
  },

  textViewAll: {
    color: colors.textViewAll,
    fontWeight: '600'
  }
})