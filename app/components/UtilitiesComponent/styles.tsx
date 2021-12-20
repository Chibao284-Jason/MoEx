import {variableGlobal} from '@config';
import {ViewStyle, ImageStyle, TextStyle} from 'react-native';
type Styles = {
  container: ViewStyle;
  viewContainerButton: ViewStyle;
  viewButton: ViewStyle;
  viewBody: ViewStyle;
  label: TextStyle;
};

export const style = (colors: ThemeColors): Styles => ({
  container: {
    flex: 1,
  },
  viewContainerButton: {
    width: '20%',
    alignItems: 'center',
    marginVertical: 15,
    marginLeft: 5,
  },
  viewButton: {
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    color: colors.textUtilities,
  },
  viewBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: variableGlobal.marginTopGlobal,
  },
});
