import { colorsTheme, variableGlobal } from '@config';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { hasNotch, getStatusBarHeight } from '@freakycoder/react-native-helpers'
type Styles = {
  containerWallet: ViewStyle
  containerWalletScreen: ViewStyle
  viewBodyTop: ViewStyle
  viewDetail: ViewStyle
  totalPercentEyes: ViewStyle;
  previewTotal: ViewStyle;
  viewWalletList: ViewStyle;
  textTotalMoney: TextStyle;
  textUnit: TextStyle;
  textTotal: TextStyle;
  textAnalysis: TextStyle;
  textPercent: TextStyle;
  labelHistory: TextStyle;
  imgEye: ImageStyle;
  lineStyle: ViewStyle
}

export const style = (colors: ThemeColors): Styles => ({
  containerWallet: {
    backgroundColor: colors.backgroundWallet,
    flex: 1,
  },
  containerWalletScreen: {
    flex: 1,
    backgroundColor: colors.backgroundWallet,
    paddingTop: hasNotch() ? getStatusBarHeight() : 10
  },

  viewDetail: {
    bottom: 40,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.backgroundItem,
    height: '300%',
    width: '100%'
  },
  totalPercentEyes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewTotal: {
    marginTop: variableGlobal.marginTopGlobal,
    marginHorizontal: variableGlobal.marginHorizontalGlobal,
  },

  textTotalMoney: {
    fontSize: 25,
    fontWeight: '700',
    color: colorsTheme.white,
  },
  textUnit: {
    color: colorsTheme.manatee,
    fontSize: 20,
  },
  textTotal: {
    color: colors.textDesc,
  },
  imgEye: {
    marginHorizontal: 5,
  },
  viewBodyTop: {
    width: '100%',
    height: 275
  },
  lineStyle: {
    marginVertical: 20,
    backgroundColor: colors.backgroundLogOutButton
  },
  textAnalysis: {
    color: colors.textDesc
  },
  textPercent: {
    color: colorsTheme.mountainMeadow,
  },
  labelHistory: {
    color: colors.textViewAll,
    fontWeight: '700',
  },
  viewWalletList: {
    height: '45%',
    justifyContent: 'space-around',
  }
});
