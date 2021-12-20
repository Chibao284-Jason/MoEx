// import { colorGlobal } from "@config/colorGlobal";
// import { getStatusBarHeight, hasNotch } from "@freakycoder/react-native-helpers";
import { ViewStyle, ImageStyle } from 'react-native'
import { variableGlobal } from "@config";
const HEADER_SIZE = 50;
type Styles = {
  container: ViewStyle
  // viewBanner: ViewStyle
  viewHeader: ViewStyle
  viewContainer: ViewStyle
  line: (show: boolean) => ViewStyle
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
});
