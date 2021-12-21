// import { colorGlobal } from "@config/colorGlobal";
// import { getStatusBarHeight, hasNotch } from "@freakycoder/react-native-helpers";
import { ViewStyle, ImageStyle, TextStyle } from 'react-native'
import { variableGlobal } from "@config";
const HEADER_SIZE = 50;
type Styles = {
  container: ViewStyle
  // viewBanner: ViewStyle
  viewHeader: ViewStyle
  viewContainer: ViewStyle
  line: (show: boolean) => ViewStyle
  textTitle: TextStyle
}
export const style = (colors: ThemeColors): Styles => ({
  container: {},
  viewHeader: {
    backgroundColor: colors.backgroundCard,
    height: HEADER_SIZE,
    justifyContent: 'center',
    paddingHorizontal: variableGlobal.paddingHorizontalGlobal
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  line: (show) => ({
    width: `100%`,
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
  }),
  textTitle: {
    fontSize: variableGlobal.fontSizeHeader,
    color: colors.textHeader,
    fontWeight: variableGlobal.fontWeightHeader
  }
});
