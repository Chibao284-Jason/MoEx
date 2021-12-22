import { StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
}
const style = (colors: ThemeColors): Styles => ({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGlobal
  },
});

export default style;
