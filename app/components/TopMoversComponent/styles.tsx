import {colorsTheme} from '@config';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
type Styles = {
  container: ViewStyle;
  containerItem: ViewStyle;
  subTitleStyle: TextStyle;
  tickerText: TextStyle;
  contentStyle: ViewStyle;
  listItem: ViewStyle;
  logo: ImageStyle;
  priceText: TextStyle;
  changeText: TextStyle;
};

export const style = (colors: ThemeColors): Styles => ({
  container: {
    paddingVertical: 20,
  },
  contentStyle: {padding: 20},
  subTitleStyle: {
    color: colorsTheme.grayApprox,
  },
  containerItem: {
    width: 143,
    marginRight: 17,
    backgroundColor: colors.backgroundItem,
    borderRadius: 10,
  },
  listItem: {
    width: 143,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  tickerText: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 5,
    color: colors.heading,
  },
  priceText: {
    fontSize: 15,
    color: colors.textUtilities,
  },
  changeText: {
    fontSize: 26,
    marginTop: 2,
  },
});
