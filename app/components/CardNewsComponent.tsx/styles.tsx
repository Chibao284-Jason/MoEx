import {variableGlobal} from '@config';
import {ViewStyle, TextStyle} from 'react-native';
import {colorsTheme} from '@config';
type Styles = {
  container: ViewStyle;
  containerBody: ViewStyle;
  viewCard: ViewStyle;
  viewTitle: ViewStyle;
  textHeading: TextStyle;
  textDesc: TextStyle;
  textViewAll: TextStyle;
  viewItem: ViewStyle;
};
export const style = (colors: ThemeColors): Styles => ({
  container: {
    marginBottom: variableGlobal.marginBottomTitle,
  },
  containerBody: {
    marginHorizontal: variableGlobal.marginHorizontalGlobal,
  },
  viewTitle: {
    marginBottom: variableGlobal.marginBottomTitle,
  },
  viewItem: {
    marginBottom: variableGlobal.marginBottomTitle,
  },
  viewCard: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: variableGlobal.borderRadiusCard,
    borderColor: colors.borderColorCard,
  },

  textHeading: {
    color: colors.heading,
    fontSize: 18,
    fontWeight: '500',
  },
  textDesc: {
    color: colors.textDesc,
    marginTop: 5,
    fontSize: variableGlobal.fontSizeGlobal,
  },

  textViewAll: {
    color: colors.textViewAll,
    fontWeight: '600',
  },
});
