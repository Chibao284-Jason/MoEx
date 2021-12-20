import {colorsTheme, variableGlobal} from '@config';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
type Styles = {
  container: ViewStyle;
  totalPercentEyes: ViewStyle;
  previewTotal: ViewStyle;
  textPercent: TextStyle;
  textTotalMoney: TextStyle;
  textUnit: TextStyle;
  textTotal: TextStyle;
  imgEye: ImageStyle;
};
export const style = (colors: ThemeColors): Styles => ({
  container: {
    backgroundColor: colors.backgroundCard,
    flex: 1,
  },
  totalPercentEyes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewTotal: {
    marginTop: variableGlobal.marginTopGlobal,
    marginHorizontal: variableGlobal.marginHorizontalGlobal,
  },
  textPercent: {
    color: colorsTheme.mountainMeadow,
  },
  textTotalMoney: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.heading,
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
});
