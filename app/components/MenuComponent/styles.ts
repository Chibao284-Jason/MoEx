import { colorsTheme, variableGlobal } from "@config";
import { TextStyle, ViewStyle } from "react-native";
type Styles = {
  containerMenu: ViewStyle
  containerMenuButton: ViewStyle
  viewIconTitle: ViewStyle
  viewLogOut: ViewStyle
  buttonLogOut: ViewStyle
  viewRightCategories: ViewStyle
  iconNearRight: ViewStyle
  textTitle: TextStyle
  textCategories: TextStyle
  textBaseCoin: TextStyle
  textLogout: TextStyle
  textVersion: TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  containerMenu: {},
  containerMenuButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: variableGlobal.marginBottomTitle,
    marginHorizontal: variableGlobal.marginHorizontalGlobal
  },
  viewIconTitle: { flexDirection: 'row', alignItems: 'center' },
  buttonLogOut: {
    backgroundColor: colors.backgroundLogOutButton,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  viewLogOut: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewRightCategories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconNearRight: {
    justifyContent: 'center'
  },
  textTitle: {
    color: colors.textTitleMenu,
    fontSize: variableGlobal.fontSizeGlobal,
    fontWeight: variableGlobal.fontWeightHeader,
    marginVertical: 25
  },
  textCategories: {
    color: colors.labelButtonColor,
    fontSize: variableGlobal.fontSizeGlobal,
    fontWeight: variableGlobal.fontWeightHeader,
    marginLeft: 8
  },
  textBaseCoin: {
    color: colors.textViewAll,
    fontWeight: '700',
  },
  textLogout: {
    color: colors.heading,
    fontSize: 18,
    fontWeight: '600'
  },
  textVersion: {
    marginTop: 10,
    color: colors.textDesc
  },
})