import { variableGlobal } from "@config";
import { ViewStyle, TextStyle } from "react-native";
type Styles = {
  containerButtonWallet: ViewStyle
  containerWalletItem: ViewStyle
  viewIconTitle: ViewStyle
  buttonLogOut: ViewStyle
  viewRightCategories: ViewStyle
  iconNearRight: ViewStyle
  viewLabelItem: ViewStyle
  textLogout: TextStyle
  textCategories: TextStyle
  textDefault: TextStyle
  textUnit: TextStyle

}
export const style = (colors: ThemeColors): Styles => ({
  containerButtonWallet: {},
  buttonLogOut: {
    backgroundColor: colors.buttonWallet,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 30,
    flex: 1,
    marginRight: 5
  },
  textLogout: {
    color: colors.textColorButton,
    fontSize: 18,
    fontWeight: '600'
  },
  containerWalletItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: variableGlobal.marginBottomTitle,
    marginHorizontal: variableGlobal.marginHorizontalGlobal
  },
  viewIconTitle: { flexDirection: 'row', alignItems: 'center' },
  textCategories: {
    color: colors.heading,
    fontSize: 16,
    fontWeight: '600'
  },
  textDefault: {
    color: colors.labelButtonColor,
    fontSize: 14,
    marginTop: 3
  },
  viewRightCategories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconNearRight: {
    justifyContent: 'center'
  },
  viewLabelItem: {
    justifyContent: 'center',
    marginLeft: 10
  },
  textUnit: {
    color: colors.textTitleMenu,
    fontSize: 18,
    fontWeight: '700',
    textDecorationLine: 'underline'
  }
})