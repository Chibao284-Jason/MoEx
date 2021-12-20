import { colorsTheme, variableGlobal } from "@config";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
type Styles = {
  containerCard: ViewStyle
  containerBody: ViewStyle
  containerList: ViewStyle
  viewTitle: ViewStyle
  viewDescCard: ViewStyle
  imgCard: ImageStyle
  textDesc: TextStyle
  textViewAll: TextStyle;
}
export const style = (colors: ThemeColors): Styles => ({
  containerCard: {
    flex: 1,
    marginRight: variableGlobal.marginRightCard
  },
  containerBody: {
    flex: 1,
    paddingLeft: variableGlobal.paddingHorizontalGlobal,
    paddingBottom: variableGlobal.paddingHorizontalGlobal

  },
  containerList: {
    paddingBottom: variableGlobal.paddingHorizontalGlobal
  },
  viewTitle: {
    marginBottom: variableGlobal.marginBottomTitle
  },
  imgCard: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  viewDescCard: {
    backgroundColor: colors.backgroundItem,
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
  , textDesc: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '400',
    color: colors.textCard
  },
  textViewAll: {
    color: colors.textViewAll,
    fontWeight: '600'
  },
})